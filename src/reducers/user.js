const USER_STATE = {
    accesstoken: '0c15ee2f-f542-48b2-a9f2-27aec5d9bda2'
}
export default function user(prestate = USER_STATE, action) {
    switch (action.type) {
        default:
            return { ...prestate };
    }
}