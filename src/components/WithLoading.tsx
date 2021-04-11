import {useState, useEffect} from 'react';
import nprogress from 'nprogress';
import {useRouter} from 'next/router'

export default function WithLoading(props) {
    const {pathname } = useRouter();
    if (typeof window !== 'undefined') {
        useState(nprogress.start());
    }

    useEffect(() => {
        nprogress.done();
    }, [pathname, props])
    return props.children
}