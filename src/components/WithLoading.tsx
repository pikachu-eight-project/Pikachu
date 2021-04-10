import {useState, useEffect} from 'react';
import nprogress from 'nprogress';

export default function WithLoading(props) {
    if (typeof window !== 'undefined') {
        useState(nprogress.start());
    }

    useEffect(() => {
        nprogress.done();
    }, [props])
    return props.children
}