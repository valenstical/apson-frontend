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
    return ['Male', 'Female', 'Male & Female'][genderId];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sS0FBTyxjQUFjOzs7O0FBQUcsVUFBQSxPQUFPO0lBQ25DLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDckIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLGNBQWM7Ozs7OztBQUFHLFVBQzVCLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBYzs7SUFFZCxNQUFNLHdCQUFRLE1BQU0sZUFBRyxHQUFHLElBQUcsS0FBSyxFQUFFLE9BQUksR0FBRSxDQUFDLE1BQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sU0FBUzs7OztBQUFHLFVBQUMsUUFBZ0I7SUFDeEMsT0FBQSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQTdDLENBQTZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2Nyb2xsSW50b1ZpZXcgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgIGlubGluZTogJ25lYXJlc3QnLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZEZpbHRlciA9IChcbiAgcGFyYW1zOiBvYmplY3QsXG4gIGtleTogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbik6IG9iamVjdCA9PiB7XG4gIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCBba2V5XTogdmFsdWUsIHBhZ2U6IDEgfTtcbiAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICB9XG4gIHJldHVybiBwYXJhbXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2VuZGVyID0gKGdlbmRlcklkOiBudW1iZXIpID0+XG4gIFsnTWFsZScsICdGZW1hbGUnLCAnTWFsZSAmIEZlbWFsZSddW2dlbmRlcklkXTtcbiJdfQ==