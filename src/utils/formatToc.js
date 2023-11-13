export default function transformArray ( inputArray ) {
    return inputArray.map ( input => {
        const result = {
            label : input.anchor ,
            children : [] ,
        };

        if ( input.children && input.children.length>0 ) {
            result.children = transformArray ( input.children );
        }
        return result;
    } );
}

