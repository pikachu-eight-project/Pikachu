import {Affix, Button} from 'antd';
import {useState} from "react";

const LayoutAffix = () => {
    const [top, setTop] = useState(800);
    return (
        <Affix offsetTop={top}>
            <Button type="primary" onClick={() => setTop(top + 10)}>
                Affix bottom
            </Button>
        </Affix>
    )
}
export default LayoutAffix