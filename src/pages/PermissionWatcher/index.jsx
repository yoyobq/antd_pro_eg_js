import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { Access, history, useAccess } from 'umi';

const PermissionWatcher = () => {
  const access = useAccess();
  console.log(access);

  if (!(access.canAdmin || access.canUser)) {
    history.push('./404');
  }

  return (
    <PageContainer>
      {access.canAdmin ? (
        <Card>
          <h1>BIG BOSS is watching U</h1>
        </Card>
      ) : null}
      <Access
        accessible={access.canUser}
        fallback={
          <Card>
            <h1>Pay for it.</h1>
          </Card>
        }
      >
        <Card>
          <h1>NOBODY cares about U</h1>
        </Card>
      </Access>
    </PageContainer>
  );
};

export default PermissionWatcher;
