import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useModel } from 'umi';

const Counter = () => {
  const { num, add, minus } = useModel('counter', (ret) => ({
    num: ret.counter,
    add: ret.increment,
    minus: ret.decrement,
  }));

  return (
    <PageContainer>
      <Card>
        <h2>{num}</h2>
        <button onClick={add}>add by 1</button>
        <button onClick={minus}>minus by 1</button>
      </Card>
    </PageContainer>
  );
};

export default Counter;
