import styles from './index.module.scss'
import Image from 'next/image';
import {useMemo} from 'react'

export interface NavConfig{
    /**
     * 锚链接
     */
    href: string,
    /**
     * 文字
     */
    text: string,
}

const navConfig:NavConfig[] = [
    {
        href: "#",
        text: "网站首页"
    },
    {
        href: "#resume",
        text: "网站简历"
    },
    {
        href: "#works",
        text: "作品欣赏"
    },
    {
        href: "#about",
        text: "关于我们"
    },
    {
        href: "#me",
        text: "联系我们"
    }
]

export default function Index() {
    const lis = useMemo(()=>{
        const navList = navConfig.map((item) => <li key={item.text}>
            <a href={item.href}>{item.text}</a>
        </li>)
        return navList
    },[navConfig])
    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/img/login_edu.png" alt="logo"/>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.ul} style={{
                        gridTemplateColumns: `repeat(${navConfig.length}, 1fr)`
                    }}>
                        {lis}
                    </ul>
                </nav>
                <div className={styles.login}>login</div>
            </header>
            <section>
                中间
            </section>
        </div>
    )
}
