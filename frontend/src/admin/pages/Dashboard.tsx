import {CardContentInner, Title} from 'react-admin';

const Dashboard = () => {
    return (
        <>
            <CardContentInner>
                <Title title="Admin Dashboard"/>
                <p>Welcome! Put your widgets here.</p>
            </CardContentInner>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                <CardContentInner style={{flex: '1 1 300px'}}>
                    <h2>Widget 1</h2>
                        {/* Custom content */}
                        <p>This is your first widget.</p>
                </CardContentInner>

                <CardContentInner style={{flex: '1 1 300px'}}>
                    <h2>Widget 2</h2>
                    {/* Custom content */}
                        <p>This is another widget.</p>
                </CardContentInner>

                {/* Add more widgets as needed */}
            </div>
        </>
    );
}
export default Dashboard