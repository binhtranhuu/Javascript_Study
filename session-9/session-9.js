let config = {
    headers: {
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiYTU2ZDk5MzA5MTYzYjA4MDI5NDE3ZWE5YjA5MDFjMmQ1MjAxNjMzMzBlNmFlMWJiZGU2Y2YzMjJjMmIwYTcyZmIyMGJiYTJhZDM2ODg0YTQiLCJpYXQiOjE2MDY4MTI0MTcsIm5iZiI6MTYwNjgxMjQxNywiZXhwIjoxNjM4MzQ4NDE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.iPyjt9kPXyyu5TTskT6RUjex0odqcqAlXOn7vjM-dla_KvCvuyX0X789hnjGLnlwihFtdbHqE_PfEPjy6dSVY5Hrc5zwMcBZnTsSOoU1NqaTesjz9wbGVJJtXDQ1vqbI5R1TJyXUhtUer7LGt3IhPdfn7tTj6oYey08r7DTMZxB4FALLHEk62a6UUuCs0HJAQbe3Fk7yVIddnoUj3buR4JLgvek_WDSw_DGa_fjEhqZ6rFsbhcKltJtZe0CcRUsRojw54KKf_HPS7tVbFWGhIULeFRpcmoI2Awr1N68cwn-Bcwpv8JbrMFvFIK30oaOjKqsyr8i6rnQXrBsnrmgCmqXg97xWwVRM4dVGqkEs0-7IC_ED1_s3J7HkMDD-pHvSylp5fB--53H8_EC3jVE510tv_gp9M6fhyX6E5eRWS9KwuVudMMA4MNBSDa1hbNQ1j2FCOiSBAX6rLz8VQcsAN29rRCZQMGY4tTEDWFdQ2srZqMFv4ypqnzW6nrWJxEVW_qJxn2EJdSAgVTdwduysaLRHrhBOvkp-ZoZBuMiO35KH2jzuQlXHGn4GTG2YV2pHpjjoHkRngtSf2uk1-rRtvP0io5V-Qh_8w2znmuw2KJnIsZlVRF6BDDOL5xgohehUGOUHeDRX_oXf_8OUHrwbkNe0JvMpnpW_EgXPc6ybjQc"
    }
}

let apiCustomer = "http://api.thuematbang24h.com/api/customer";
let apiService = "http://api.thuematbang24h.com/api/service";

handleCustomer = () => {
    //axios method GET
    axios.get(apiCustomer, config)
        .then(function (response) {
            var dataCustomer = response.data.data;
            console.log(dataCustomer)
            dataCustomer.forEach((item) => {
                document.getElementById("custommer").innerHTML += item.value + ": " + item.label + "<br>";
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

handleCustomer();

handleService = () => {
    let nameProduct = document.getElementById("product").value;
    let priceProduct = document.getElementById("price").value;

    //axios method POST
    axios.post(apiService, {
        name: nameProduct,
        price: priceProduct
    }, config)
        .then(function (response) {
            if (response.status == 200) {
                document.getElementById("alert").innerHTML = "Thêm dịch vụ thành công";
                document.getElementById("showProduct").innerHTML = "Dịch vụ vừa thêm là: " + nameProduct + "<br />";
                document.getElementById("ShowPrice").innerHTML = "Giá dịch vụ là: " + priceProduct + "<br />";
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

handleService();
