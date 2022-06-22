import { Card } from 'antd';
import '../Profile.css'
import {LikeOutlined} from '@ant-design/icons'
import {EnvironmentOutlined} from '@ant-design/icons'
const Profile = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
        <Card className='wrapper' >
            <div className="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
            <div className='inf'>Ngô Hải Long</div>
            <div className='inf'>
                <EnvironmentOutlined type="environment" />
                <div>HO CHI MINH</div>
            </div>
            <div className='inf'>
                <EnvironmentOutlined type="environment" />
                <div>Username</div>
            </div>
            <div className='inf'>
                <div className='item'>like
                    <LikeOutlined type="like"/>
                </div>
                <div className='item'>comment
                    <LikeOutlined type="like"/>
                </div>
                <div className='item'>post
                     <LikeOutlined type="like"/>
                </div>
            </div>
            
        </Card>

  );
};

export default Profile;