module.exports = {
    //aaa는 유저1, bbb는 유저2로 가정 
    tokenValidator: (token) => {
        let result;
        if (token === "Bearer aaa") { 
            result = false;
            // userId 1()은 DB 에서 구매자 (is_seller = false)
        } else if (token === "Bearer bbb") {
            result = true;
            // userId 2(시연님)은 DB 에서 판매자 (is_seller = true)
        } else if (token === "Bearer ccc") {
            result = false;
            // userId 3()은 DB 에서 구매자 (is_seller = false)
        } 
        return result
    }
}
