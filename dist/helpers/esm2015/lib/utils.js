/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const scrollIntoView = (/**
 * @param {?} element
 * @return {?}
 */
element => {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
});
/** @type {?} */
export const selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
(params, key, value) => {
    params = Object.assign({}, params, { [key]: value, page: 1 });
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLGNBQWM7Ozs7QUFBRyxPQUFPLENBQUMsRUFBRTtJQUN0QyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxjQUFjOzs7Ozs7QUFBRyxDQUM1QixNQUFjLEVBQ2QsR0FBVyxFQUNYLEtBQWMsRUFDTixFQUFFO0lBQ1YsTUFBTSxxQkFBUSxNQUFNLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxDQUFDO0lBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQzdDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjcm9sbEludG9WaWV3ID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICBibG9jazogJ3N0YXJ0JyxcbiAgICBpbmxpbmU6ICduZWFyZXN0JyxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRGaWx0ZXIgPSAoXG4gIHBhcmFtczogb2JqZWN0LFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU/OiBzdHJpbmcsXG4pOiBvYmplY3QgPT4ge1xuICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgW2tleV06IHZhbHVlLCBwYWdlOiAxIH07XG4gIGlmICghdmFsdWUgfHwgIXZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCkge1xuICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufTtcbiJdfQ==