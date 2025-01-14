import { componentTypes } from '../utils/constants';
import { isEqual } from '../utils/helper';
import {
	SET_VALUE,
	CLEAR_VALUES,
	PATCH_VALUE,
	SET_INTERNAL_VALUE,
	RESET_TO_DEFAULT,
	SET_VALUES,
} from '../constants';
import { updateStoreConfig } from './utils';

export function setValue(
	component,
	value,
	label,
	showFilter,
	URLParams,
	componentType,
	category,
	meta,
	updateSource, // valid values => 'URL'
) {
	return (dispatch, getState) => {
		const {
			urlValues, selectedValues, watchMan, props,
		} = getState();
		// set the value reference
		let reference = updateSource;
		if (isEqual(urlValues[component], value)) {
			reference = 'URL';
		}
		// Clear pagination state for result components
		// Only clear when value is not set by URL params
		const componentsToReset = {};
		const isResultComponent = [
			componentTypes.reactiveList,
			componentTypes.reactiveMap,
		].includes(props[component] && props[component].componentType);
		const previousValue = selectedValues[component] && selectedValues[component].value;
		if (!isEqual(previousValue, value) && props[component] && !isResultComponent) {
			let componentList = [component];
			const watchList = watchMan[component] || [];
			componentList = [...componentList, ...watchList];
			componentList.forEach((comp) => {
				// Clear pagination state for result components
				// Only clear when value is not set by URL params
				const componentProps = props[comp];
				if (
					reference !== 'URL'
					&& componentProps
					// eslint-disable-next-line max-len
					&& [componentTypes.reactiveList, componentTypes.reactiveMap].includes(componentProps.componentType)
				) {
					if (selectedValues[comp] !== null) {
						componentsToReset[comp] = null;
					}
				}
			});
		}
		if (isResultComponent) {
			// reject default page requests
			if (value < 2 && (!previousValue || previousValue < 2)) {
				return;
			}
		}
		dispatch({
			type: SET_VALUE,
			component,
			reference,
			value,
			label,
			showFilter,
			URLParams,
			componentType,
			category,
			meta,
			componentsToReset,
		});
	};
}

export function resetValuesToDefault(clearAllBlacklistComponents) {
	return (dispatch, getState) => {
		const { selectedValues, props: componentProps } = getState();
		let defaultValues = {
			// componentName: defaultValue,
		};

		let valueToSet;
		Object.keys(selectedValues).forEach((component) => {
			if (
				!(
					Array.isArray(clearAllBlacklistComponents)
					&& clearAllBlacklistComponents.includes(component)
				)
			) {
				if (
					!componentProps[component]
					|| !componentProps[component].componentType
					|| !componentProps[component].defaultValue
				) {
					valueToSet = null;
				} else if (
					[
						componentTypes.rangeSlider,
						componentTypes.rangeInput,
						componentTypes.ratingsFilter,
						componentTypes.dateRange,
					].includes(componentProps[component].componentType)
				) {
					valueToSet
						= typeof componentProps[component].defaultValue === 'object'
							? [
								componentProps[component].defaultValue.start,
								componentProps[component].defaultValue.end,
							  ]
							: null;
				} else if (
					[
						componentTypes.multiDropdownList,
						componentTypes.multiDataList,
						componentTypes.multiList,
						componentTypes.singleDataList,
						componentTypes.singleDropdownList,
						componentTypes.singleList,
						componentTypes.tagCloud,
						componentTypes.toggleButton,
						componentTypes.multiDropdownRange,
						componentTypes.multiRange,
						componentTypes.singleDropdownRange,
						componentTypes.singleRange,
						componentTypes.dataSearch,
						componentTypes.datePicker,
						componentTypes.treeList,
					].includes(componentProps[component].componentType)
				) {
					valueToSet = componentProps[component].defaultValue;
				} else if (
					[componentTypes.categorySearch].includes(componentProps[component].componentType)
				) {
					valueToSet = componentProps[component].defaultValue
						? componentProps[component].defaultValue.term
						: '';
				}
				if (!isEqual(selectedValues[component].value, valueToSet)) {
					defaultValues = {
						...defaultValues,
						[component]: {
							...selectedValues[component],
							value: valueToSet,
						},
					};
				}
			}
		});
		dispatch({
			type: RESET_TO_DEFAULT,
			defaultValues,
		});
	};
}
export function setInternalValue(component, value, componentType, category, meta) {
	return {
		type: SET_INTERNAL_VALUE,
		component,
		value,
		componentType,
		category,
		meta,
	};
}
/**
 * Patches the properties of the component
 * @param {String} component
 * @param {Object} payload
 */
export function patchValue(component, payload) {
	return {
		type: PATCH_VALUE,
		component,
		payload,
	};
}
export function clearValues(resetValues = {}, clearAllBlacklistComponents = []) {
	return {
		type: CLEAR_VALUES,
		resetValues,
		clearAllBlacklistComponents,
	};
}

export function setValues(componentsValues) {
	return (dispatch) => {
		dispatch(updateStoreConfig({
			queryLockConfig: { initialTimestamp: new Date().getTime(), lockTime: 300 },
		}));
		dispatch({
			type: SET_VALUES,
			componentsValues,
		});
	};
}
