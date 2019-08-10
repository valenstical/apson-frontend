/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var scrollIntoView = (/**
 * @param {?} element
 * @return {?}
 */
function (element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
});
/** @type {?} */
export var selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
function (params, key, value) {
    var _a;
    params = tslib_1.__assign({}, params, (_a = {}, _a[key] = value, _a.page = 1, _a));
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});
/** @type {?} */
export var getGender = (/**
 * @param {?} genderId
 * @return {?}
 */
function (genderId) {
    return ['Male Only', 'Female Only', 'Male & Female'][genderId];
});
/** @type {?} */
export var toMobileNumber = (/**
 * @param {?} phone
 * @return {?}
 */
function (phone) {
    /** @type {?} */
    var suffix = '0';
    /** @type {?} */
    var firstLetter = phone.charAt(0);
    if (firstLetter === '2') {
        suffix = '+';
    }
    else if (firstLetter === '0' || firstLetter === '+') {
        suffix = '';
    }
    return "" + suffix + phone;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sS0FBTyxjQUFjOzs7O0FBQUcsVUFBQSxPQUFPO0lBQ25DLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDckIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLGNBQWM7Ozs7OztBQUFHLFVBQzVCLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBYzs7SUFFZCxNQUFNLHdCQUFRLE1BQU0sZUFBRyxHQUFHLElBQUcsS0FBSyxFQUFFLE9BQUksR0FBRSxDQUFDLE1BQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sU0FBUzs7OztBQUFHLFVBQUMsUUFBZ0I7SUFDeEMsT0FBQSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQXZELENBQXVELENBQUE7O0FBRXpELE1BQU0sS0FBTyxjQUFjOzs7O0FBQUcsVUFBQyxLQUFhOztRQUN0QyxNQUFNLEdBQUcsR0FBRzs7UUFDVixXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxXQUFXLEtBQUssR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FDZDtTQUFNLElBQUksV0FBVyxLQUFLLEdBQUcsSUFBSSxXQUFXLEtBQUssR0FBRyxFQUFFO1FBQ3JELE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDYjtJQUNELE9BQU8sS0FBRyxNQUFNLEdBQUcsS0FBTyxDQUFDO0FBQzdCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY3JvbGxJbnRvVmlldyA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgYmxvY2s6ICdzdGFydCcsXG4gICAgaW5saW5lOiAnbmVhcmVzdCcsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkRmlsdGVyID0gKFxuICBwYXJhbXM6IG9iamVjdCxcbiAga2V5OiBzdHJpbmcsXG4gIHZhbHVlPzogc3RyaW5nLFxuKTogb2JqZWN0ID0+IHtcbiAgcGFyYW1zID0geyAuLi5wYXJhbXMsIFtrZXldOiB2YWx1ZSwgcGFnZTogMSB9O1xuICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGgpIHtcbiAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHZW5kZXIgPSAoZ2VuZGVySWQ6IG51bWJlcikgPT5cbiAgWydNYWxlIE9ubHknLCAnRmVtYWxlIE9ubHknLCAnTWFsZSAmIEZlbWFsZSddW2dlbmRlcklkXTtcblxuZXhwb3J0IGNvbnN0IHRvTW9iaWxlTnVtYmVyID0gKHBob25lOiBzdHJpbmcpID0+IHtcbiAgbGV0IHN1ZmZpeCA9ICcwJztcbiAgY29uc3QgZmlyc3RMZXR0ZXIgPSBwaG9uZS5jaGFyQXQoMCk7XG4gIGlmIChmaXJzdExldHRlciA9PT0gJzInKSB7XG4gICAgc3VmZml4ID0gJysnO1xuICB9IGVsc2UgaWYgKGZpcnN0TGV0dGVyID09PSAnMCcgfHwgZmlyc3RMZXR0ZXIgPT09ICcrJykge1xuICAgIHN1ZmZpeCA9ICcnO1xuICB9XG4gIHJldHVybiBgJHtzdWZmaXh9JHtwaG9uZX1gO1xufTtcbiJdfQ==