interface people {
    name: string;
    sex?: string;
    age?: number;
 }

export function userInfo(info: people){
    return info
}