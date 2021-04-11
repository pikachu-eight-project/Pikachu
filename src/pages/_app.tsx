import './styles.scss'
import LayoutHeader from "@/layouts/Header";
import WithLoading from "@/components/WithLoading";

function App({Component, pageProps, ...props}) {
    return (
        <>
            <WithLoading>
                <LayoutHeader/>
                <Component {...pageProps}/>
            </WithLoading>
        </>
    )
}

export default App;