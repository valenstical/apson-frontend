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
/** @type {?} */
export const getGender = (/**
 * @param {?} genderId
 * @return {?}
 */
(genderId) => ['Male Only', 'Female Only', 'Male & Female'][genderId]);
/** @type {?} */
export const toMobileNumber = (/**
 * @param {?} phone
 * @return {?}
 */
(phone) => {
    /** @type {?} */
    let suffix = '0';
    /** @type {?} */
    const firstLetter = phone.charAt(0);
    if (firstLetter === '2') {
        suffix = '+';
    }
    else if (firstLetter === '0' || firstLetter === '+') {
        suffix = '';
    }
    return `${suffix}${phone}`;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oZWxwZXJzLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLGNBQWM7Ozs7QUFBRyxPQUFPLENBQUMsRUFBRTtJQUN0QyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3JCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxjQUFjOzs7Ozs7QUFBRyxDQUM1QixNQUFjLEVBQ2QsR0FBVyxFQUNYLEtBQWMsRUFDTixFQUFFO0lBQ1YsTUFBTSxxQkFBUSxNQUFNLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxDQUFDO0lBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQzdDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxTQUFTOzs7O0FBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FDNUMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBOztBQUV6RCxNQUFNLE9BQU8sY0FBYzs7OztBQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7O1FBQzFDLE1BQU0sR0FBRyxHQUFHOztVQUNWLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLFdBQVcsS0FBSyxHQUFHLEVBQUU7UUFDdkIsTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUNkO1NBQU0sSUFBSSxXQUFXLEtBQUssR0FBRyxJQUFJLFdBQVcsS0FBSyxHQUFHLEVBQUU7UUFDckQsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNiO0lBQ0QsT0FBTyxHQUFHLE1BQU0sR0FBRyxLQUFLLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2Nyb2xsSW50b1ZpZXcgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7XG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgIGlubGluZTogJ25lYXJlc3QnLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZEZpbHRlciA9IChcbiAgcGFyYW1zOiBvYmplY3QsXG4gIGtleTogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZyxcbik6IG9iamVjdCA9PiB7XG4gIHBhcmFtcyA9IHsgLi4ucGFyYW1zLCBba2V5XTogdmFsdWUsIHBhZ2U6IDEgfTtcbiAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICB9XG4gIHJldHVybiBwYXJhbXM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2VuZGVyID0gKGdlbmRlcklkOiBudW1iZXIpID0+XG4gIFsnTWFsZSBPbmx5JywgJ0ZlbWFsZSBPbmx5JywgJ01hbGUgJiBGZW1hbGUnXVtnZW5kZXJJZF07XG5cbmV4cG9ydCBjb25zdCB0b01vYmlsZU51bWJlciA9IChwaG9uZTogc3RyaW5nKSA9PiB7XG4gIGxldCBzdWZmaXggPSAnMCc7XG4gIGNvbnN0IGZpcnN0TGV0dGVyID0gcGhvbmUuY2hhckF0KDApO1xuICBpZiAoZmlyc3RMZXR0ZXIgPT09ICcyJykge1xuICAgIHN1ZmZpeCA9ICcrJztcbiAgfSBlbHNlIGlmIChmaXJzdExldHRlciA9PT0gJzAnIHx8IGZpcnN0TGV0dGVyID09PSAnKycpIHtcbiAgICBzdWZmaXggPSAnJztcbiAgfVxuICByZXR1cm4gYCR7c3VmZml4fSR7cGhvbmV9YDtcbn07XG4iXX0=