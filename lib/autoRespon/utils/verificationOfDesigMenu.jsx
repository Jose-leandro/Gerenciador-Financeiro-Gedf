import { PartyPopper } from "lucide-react";
import React, { useRef, useEffect, useState } from 'react';


export function useVerificationOfDesigMenu(sizeThreshold, objectReferencies) {
    let typeOfError = {}


    const error1SizeOfBroswer = (sizeThreshold) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;


        if (windowWidth < sizeThreshold) {
            typeOfError = {
                error: 1.1,
                description: `the size of the widonws of the broswer ${windowWidth},
                  it is less of size of sizeThreshold ${sizeThreshold}`
            }

        }

        window.addEventListener('resize', () => {
            const resizeWindowWidth = window.innerWidth;
            const resizeWindowHeight = window.innerHeight;

            if (resizeWindowWidth == !windowWidth) {

                typeOfError = {
                    error: 1.2,
                    description: `size of width of broswer change, before is ${windowWidth}, now is ${resizeWindowWidth}`
                }
            }

            if (resizeWindowHeight == !windowHeight) {
                typeOfError = {
                    error: 1.3,
                    description: `size of heigth of broswer change, before is ${windowHeight}, now is ${resizeWindowHeight}`
                }
            }
        });

    }

    function compareObjects(obj1, obj2) {
        const differences = {};

        // Loop through the keys in obj1
        for (const key in obj1) {
            if (obj1[key]?.top !== obj2[key]?.top) {
                // Add a key to `differences` for `top` changes
                differences[key] = differences[key] || {};
                differences[key].top = {
                    error: 2.1,
                    description: `The value of 'top' of '${key}' changed: before was ${obj1[key]?.top}, now is ${obj2[key]?.top}`
                };
            }

            if (obj1[key]?.left !== obj2[key]?.left) {
                // Add a key to `differences` for `left` changes
                differences[key] = differences[key] || {};
                differences[key].left = {
                    error: 2.2,
                    description: `The value of 'left' of '${key}' changed: before was ${obj1[key]?.left}, now is ${obj2[key]?.left}`
                };
            }
        }

        return differences;
    }


    let callCount = 0;

    const error2PositionOfElementsChange = (objectReferencies) => {
        const { div, menuIcon, divMenu, menu, menuUsuario, menuItem, usuarioLogin, usuarioSing } = objectReferencies;
        console.log(objectReferencies)

        callCount++;
        console.log(`myFunction was called ${callCount} times`);

        const firtsDateobjectReferencies = {}
        const secondDateobjectReferencies = {}

        Object.entries(objectReferencies).forEach((refrenciesElement) => {
            const elementRef = refrenciesElement[1]
            console.log(elementRef)
        
            if (!elementRef) {
                console.error("Reference to the element is undefined:", refrenciesElement);
                return; // Skip this iteration if elementRef is null or undefined
            }
        
            const rect = elementRef.getBoundingClientRect();
        
            firtsDateobjectReferencies[refrenciesElement] = {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            };
        });
        

        if (callCount === 2) {
            console.log("myFunction is called for the second time!");

            Object.entries(objectReferencies).forEach(([refrenciesElement]) => {
                const elementRef = refrenciesElement.classOfElement?.current;
                const rect = elementRef.getBoundingClientRect();

                secondDateobjectReferencies[refrenciesElement] = new Date({
                    top: rect.top,
                    Left: rect.left
                });
            });

            callCount = 1;
        }


        const compareObject = compareObjects(firtsDateobjectReferencies, secondDateobjectReferencies)

        typeOfError = compareObject
    }


    error1SizeOfBroswer(sizeThreshold)

    error2PositionOfElementsChange(objectReferencies)



    return typeOfError

}