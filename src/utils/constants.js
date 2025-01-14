export const componentTypes = {
	reactiveList: 'REACTIVELIST',
	// search components
	dataSearch: 'DATASEARCH',
	categorySearch: 'CATEGORYSEARCH',
	searchBox: 'SEARCHBOX',
	// list components
	singleList: 'SINGLELIST',
	multiList: 'MULTILIST',
	singleDataList: 'SINGLEDATALIST',
	tabDataList: 'TABDATALIST',
	singleDropdownList: 'SINGLEDROPDOWNLIST',
	multiDataList: 'MULTIDATALIST',
	multiDropdownList: 'MULTIDROPDOWNLIST',
	singleDropdownRange: 'SINGLEDROPDOWNRANGE',
	treeList: 'TREELIST',
	// basic components
	numberBox: 'NUMBERBOX',
	tagCloud: 'TAGCLOUD',
	toggleButton: 'TOGGLEBUTTON',
	reactiveComponent: 'REACTIVECOMPONENT',
	// range components
	datePicker: 'DATEPICKER',
	dateRange: 'DATERANGE',
	dynamicRangeSlider: 'DYNAMICRANGESLIDER',
	multiDropdownRange: 'MULTIDROPDOWNRANGE',
	singleRange: 'SINGLERANGE',
	multiRange: 'MULTIRANGE',
	rangeSlider: 'RANGESLIDER',
	ratingsFilter: 'RATINGSFILTER',
	rangeInput: 'RANGEINPUT',
	// map components
	geoDistanceDropdown: 'GEO_DISTANCE_DROPDOWN',
	geoDistanceSlider: 'GEO_DISTANCE_SLIDER',
	reactiveMap: 'REACTIVE_MAP',
	// chart components
	reactiveChart: 'REACTIVE_CHART',
};

export const queryTypes = {
	search: 'search',
	term: 'term',
	range: 'range',
	geo: 'geo',
	suggestion: 'suggestion',
};
export const validProps = [
	// common
	'type',
	'componentType',
	'aggregationField',
	'aggregationSize',
	'distinctField',
	'distinctFieldConfig',
	'index',
	'aggregations',
	// Specific to ReactiveList
	'dataField',
	'includeFields',
	'excludeFields',
	'size',
	'from',
	'sortBy',
	'sortOptions',
	'pagination',
	// Specific to DataSearch
	'autoFocus',
	'autosuggest',
	'debounce',
	'defaultValue',
	'defaultSuggestions',
	'fieldWeights',
	'filterLabel',
	'fuzziness',
	'highlight',
	'highlightConfig',
	'highlightField',
	'nestedField',
	'placeholder',
	'queryFormat',
	'searchOperators',
	'enableSynonyms',
	'enableQuerySuggestions',
	'enablePopularSuggestions',
	'queryString',
	// Specific to Category Search
	'categoryField',
	'strictSelection',
	// Specific to List Components
	'selectAllLabel',
	'showCheckbox',
	'showFilter',
	'showSearch',
	'showCount',
	'showLoadMore',
	'loadMoreLabel',
	'showMissing',
	'missingLabel',
	'data',
	'showRadio',
	// TagCloud and ToggleButton
	'multiSelect',
	// Range Components
	'includeNullValues',
	'interval',
	'showHistogram',
	'snap',
	'stepValue',
	'range',
	'showSlider',
	'parseDate',
	'calendarInterval',
	// Map components
	'unit',
	// Specific to searchBox
	'enablePopularSuggestions',
	'enableRecentSuggestions',
	'popularSuggestionsConfig',
	'recentSuggestionsConfig',
	'indexSuggestionsConfig',
	'featuredSuggestionsConfig',
	'enablePredictiveSuggestions',
	'applyStopwords',
	'customStopwords',
	'enableIndexSuggestions',
	'enableFeaturedSuggestions',
	'searchboxId',
	'endpoint',
];

export const CLEAR_ALL = {
	NEVER: 'never',
	ALWAYS: 'always',
	DEFAULT: 'default',
};

// search components modes
export const SEARCH_COMPONENTS_MODES = {
	SELECT: 'select',
	TAG: 'tag',
};
