import {IsObjectsEqual, IsTwoObjectEqual} from './types'

const isTwoObjectEqual:IsTwoObjectEqual = (firstObject, secondObject) => {

    let isTwoObjectEqualResult:boolean = true
    
    if (firstObject && secondObject) {

        const isComparedItemsHasTypeObject = typeof firstObject === 'object' && typeof secondObject === 'object'

        if (!isComparedItemsHasTypeObject) {
            return false
        }
        

        const firstObjectKeys = Object.keys(firstObject),
              secondObjectKeys = Object.keys(secondObject),
              isObjectsPropsCountEqual = firstObjectKeys.length === secondObjectKeys.length

        if (isObjectsPropsCountEqual) {

            for (let firstObjectKey of firstObjectKeys) {
                const firstObjectValue = firstObject[firstObjectKey],
                      hasSecondObjectEqualKey = Object.hasOwnProperty.call(secondObject, firstObjectKey)


                if (hasSecondObjectEqualKey) {
                    const secondObjectValue = secondObject[firstObjectKey],
                          isComparableObjectValueIsObject = typeof firstObjectValue === "object" && typeof secondObjectValue === "object"
                    
                    /**
                     * deep compare
                     */
                    if (isComparableObjectValueIsObject) {
                        const isTwoDeeperObjectNotEqual = !isTwoObjectEqual(firstObjectValue, secondObjectValue)

                        if (isTwoDeeperObjectNotEqual) {
                            isTwoObjectEqualResult = false
                            break
                        }

                    } else {
                        const isComparableObjectValueNotEqual = secondObjectValue != firstObjectValue

                        
                        if (isComparableObjectValueNotEqual) {
                            isTwoObjectEqualResult = false
                            break
                        }

                    }




                } else {
                    isTwoObjectEqualResult = false
                    break
                }

            }

        } else {
            isTwoObjectEqualResult = false
        }



    } else {
        isTwoObjectEqualResult = false
    }

    return isTwoObjectEqualResult
}

/**
 * @description
 * function for compare not deep and deep object, not support compare Map and Set objects
 *
 * @param {Array} objectsArray
 * @returns {boolean}
 *
 * @example
 * isObjectsEqual([{a: '1'}, {a: '1'}])
 * // => true
 *
 * isObjectsEqual([{a: '1'}, {a: '2'}
 * // => false
 *
 * isObjectsEqual([{a: '1'}, {a: '1'}, {a: '2'}])
 * // => false
 *
 * const firstObject = {
 *     a: 1,
 *     b: {
 *         c: 1
 *     }
 * },
 * secondObject = {
 *     a: 1,
 *     b: {
 *         c: 2
 *     }
 * }
 *
 * isObjectsEqual([firstObject, secondObject])
 * // => false
 */
const isObjectsEqual:IsObjectsEqual = (objectsArray) => {

    let isObjectsEqualResult:boolean = true

    if (Array.isArray(objectsArray)) {

        for(let index = 0;;index++) {
            const firstObject = objectsArray[index],
                  secondObject = objectsArray[index + 1]
            


            if (firstObject && secondObject) {

                const isComparedItemsHasTypeObject = typeof firstObject === 'object' && typeof secondObject === 'object'

                if (!isComparedItemsHasTypeObject) {
                    throw new Error('type of compared items must be object')
                }

                isObjectsEqualResult = isTwoObjectEqual(firstObject, secondObject)
                
                if (isObjectsEqualResult === false) break

            } else {


                if (typeof firstObject !== "object") throw new Error('type of compared items must be object')
                break
            }

        }

    } else {
        throw new Error('compared object must be in array')
    }




    return isObjectsEqualResult
}


export default isObjectsEqual
