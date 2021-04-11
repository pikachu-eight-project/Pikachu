import styles from './index.module.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import { FormInstance } from 'antd/lib/form';
import {useCallback, useRef} from "react";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = ()=>{
    const ref = useRef<FormInstance>();

    // 提交表单
    const onFinish = useCallback((e:{username:string, password:string})=>{
        console.log(e)
    },[]);

    // 重置表单
    const onReset = useCallback((e)=>{
        ref.current!.resetFields();
    },[]);

    const onFinishFailed = useCallback((errorInfo: any) => {
        console.log('Failed:', errorInfo);
    },[]);

    return (
        <section className={styles["page-login"]}>
            <h1 className={styles.title}>管理系统</h1>
            <div className={styles.form}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    ref={ref}
                >
                    <Form.Item
                        label="用户账号"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="用户密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}

export default Login;