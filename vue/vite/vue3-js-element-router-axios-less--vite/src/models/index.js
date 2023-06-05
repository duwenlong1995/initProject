import {http} from "../utils/http";

// 调用测试
export function getTest() {
    return http({
        url: "/juzi", //此处为自己请求地址
        method: "get",
    });
}

export function postText(params) {
    return http({
        url: "/chaju", //此处为自己请求地址
        method: "post",
        data: params,
    });
}