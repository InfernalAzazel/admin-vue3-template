export default [
    {
        url: "/api/getUsers",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data: ["tom", "jerry"],
            };
        },
    },
    {
        url: "/api/login",
        method: "post",
        // @ts-ignore
        response: ({ body}) => {
            console.log(body);
            if (body.username === 'admin' && body.password === '123456'){
                return {
                    'status': 'success',
                    'data': {
                        'token': 'token21313213',
                        'refresh_token': 'token21313213',
                        'userid': '1',
                        'id': '1',
                }}
            }else{
                return{'msg': '请输入有效的账号或者密码'}
            }

        },
    },
];
