import './styles.scss'
import LayoutHeader from "@/layouts/Header";
import WithLoading from "@/components/WithLoading";
export default function App({Component, pageProps, ...props}) {
    console.log()
    return (
        <>
            <WithLoading>
                <LayoutHeader/>
                <Component {...pageProps}/>
            </WithLoading>
        </>
    )
}
