/**
 * Convert boolean to affirmative or negative phrasing
 * @param boolVal - boolean value
 * @returns - Text affirmation/negation
 */
export const boolToAffirmOrNeg = (boolVal: boolean | undefined | null): string => {
    return boolVal ? 'Yes' : 'No'
}