const base = {
    get() {
        return {
            url : "http://localhost:8080/yuangongjiankang/",
            name: "yuangongjiankang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yuangongjiankang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "员工健康管理系统"
        } 
    }
}
export default base
