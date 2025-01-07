import React from 'react';

function ReactList(props) {
    const SampleArray = ['Harsha','Ram','Siva','Hari','Sai']
    //map method==> iterates over the elements of an array and perform an operation over them
    //Array.method()==>usage
    return (
        <div>
            <ol>
            {
              SampleArray.filter(function(arrayElement,arrayElementIndex){
                return arrayElement==='Ram'
              })
            }
            </ol>
        </div>
    );
}

export default ReactList;