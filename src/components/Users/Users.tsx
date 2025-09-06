import { useState } from "react";
import UseFetchHook from "../../hooks/UseFetchHook";

function Users() {
    const baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
    const [userId, setUserId] = useState(1);
    const [userUrl, setUrl] = useState(null);
    const { loading, data: userData, error } = UseFetchHook(userUrl);

    function changeUrl() {
        setUrl(`${baseUrl}/${userId}`);
        setUserId(prev => prev + 1);
    }

    return (<>
        <div>
            {loading && <span>Loading...</span>}
            {error && <span>Error loading data</span>}
            {!loading && !error && userData && (
                <div>
                    <span>Empty</span>
                    <span>{userData.name}</span>
                    <span>{userData.phone}</span>
                </div>
            )}

            <br />
            <button onClick={changeUrl}>Fetch Next User</button>
        </div>
    </>);
}

export default Users;