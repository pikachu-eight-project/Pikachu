import styles from './index.module.scss'
import {useMemo, useState} from "react";
import {useRouter} from 'next/router'
import {Menu, Button} from 'antd'

export interface NavConfig {
    /**
     * 锚链接
     */
    href: string,
    /**
     * 文字
     */
    text: string,
}

/**
 * 导航栏配置项
 */
const navConfig: NavConfig[] = [
    {
        href: "/",
        text: "网站首页"
    },
    {
        href: "/works",
        text: "作品欣赏"
    },
    {
        href: "/resume",
        text: "网站简历"
    },
    {
        href: "/about",
        text: "关于我们"
    },
    {
        href: "/relation",
        text: "联系我们"
    }
]

const LayoutHeader = () => {
    const {push, pathname} = useRouter();
    const [nav, setNav] = useState<any>(navConfig[0].text);
    const lis = useMemo(() => {
        const navList = navConfig.map((item) =>
            <Menu.Item key={item.text}
                       onClick={() => {
                          pathname !== item.href && push(item.href)
                       }}>{item.text}
            </Menu.Item>
        )
        return navList
    }, [navConfig, pathname])
    return (
        <section className={styles.header}>
            <div className={styles.logo}>
                <img src="/img/logo2.png" alt="logo" className={styles.images}/>
            </div>
            <nav className={styles.nav}>
                <Menu onClick={(e) => setNav(e.key)}
                      selectedKeys={[nav]}
                      mode="horizontal"
                      overflowedIndicator={<i className="iconfont">&#xe70a;</i>}>
                    {lis}
                </Menu>
            </nav>
            <div className={styles.login}>
                <Button type="primary" shape="round" onClick={()=>{
                    pathname !== "/login" && push("/login")
                }}>登录</Button>
            </div>
        </section>
    )
}

export default LayoutHeader