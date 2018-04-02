//封装工具类
(function (window, document) {
    window.utils = {
        // axios的get请求
        axiosGet: function (url, data) {
            let re = new Promise(function (resolve, reject) {
                axios.get(url, {
                        params: data
                    })
                    .then(function (res) {
                        resolve(res.data)
                    })
                    .catch(function (err) {
                        reject(err)
                    })
            })
            return re
        }
    }
})(window, document)