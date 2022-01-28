let idGenIndex = 0;

export const questionnaireIdGenerator = function(){
    return idGenIndex++;
}

export const createQuestionnaire = function (defaultValues) {
    return Object.assign(
        {
            id: questionnaireIdGenerator(),
            name: '',
            image: ''
        },
        defaultValues
    );
};

import supplementalImgUrl from '../assets/images/contractor-supplemental.png';

export const fetchQuestionnaires = async function () {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                createQuestionnaire({
                    name: 'ACORD 125 - Commercial Insurance Application',
                    description: 'Record general client information including business location and contact details, business description, and prior insurance history',
                    image: supplementalImgUrl
                }),
            ]);
        }, 1000);
    });
};
