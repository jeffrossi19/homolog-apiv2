<!DOCTYPE html>
<html>

<head>
    <title>Validação de Campos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f1f1f1;
        }

        .container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }

        h1 {
            text-align: center;
        }

        textarea {
            width: 100%;
            height: 150px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
        }

        button {
            display: block;
            margin: 10px auto;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .error-message {
            color: red;
            font-weight: bold;
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
            width: 100%;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Validação de Campos</h1>

        <textarea id="requestDataInput" rows="10" placeholder="Cole o JSON..."></textarea>
        <div id="errorContainer" class="error-message" style="display: none;"></div>

        <br>
        <label for="methodSelection">Escolha o Método:</label>
        <select id="methodSelection" onchange="updateEndpoints()">
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
        </select>

        <br>
        <label for="endpointSelection">Escolha o Endpoint:</label>
        <select id="endpointSelection">
            <!-- Add other options... -->
            <option value="brands">Brands</option>
            <option value="categories">Categories</option>
            <option value="images">Images</option>
            <option value="orders">Orders</option>
            <option value="products">Products</option>
            <option value="sku">Sku</option>
            <option value="sku marketplace">Sku Marketplace</option>
            <option value="stocks">Stocks</option>
            <option value="stocks/locals">Stocks/Locals</option>
            <option value="variations values">Variations Values</option>
            <option value="variations">Variations</option>
        </select>

        <button onclick="validateRequest()">Validar</button>

        <script>
            function updateEndpoints() {
                var method = document.getElementById("methodSelection").value;
                var endpointSelect = document.getElementById("endpointSelection");
                endpointSelect.innerHTML = ""; // Clear the existing options

                if (method === "POST") {
                    // Add options for POST endpoints
                    var postEndpoints = ["Brands", "Categories", "Images", "Products", "Sku", "Sku Marketplace", "Stocks", "Stocks/Locals", "Variations", "Variations Values"];
                    for (var i = 0; i < postEndpoints.length; i++) {
                        var option = document.createElement("option");
                        option.value = postEndpoints[i];
                        option.text = postEndpoints[i];
                        endpointSelect.appendChild(option);
                    }
                } else if (method === "PUT") {
                    // Add options for PUT endpoints
                    var putEndpoints = ["brands", "categories", "images", "products", "stocks", "stocks/locals", "orders(Faturado)", "orders(Enviado)", "orders(Concluido)", "orders(Cancelado)", "orders(XML)", "SKU", "SKU Marketplace", "variations", "variations values"];
                    for (var i = 0; i < putEndpoints.length; i++) {
                        var option = document.createElement("option");
                        option.value = putEndpoints[i];
                        option.text = putEndpoints[i];
                        endpointSelect.appendChild(option);
                    }
                }
            }

            function validateRequest() {
                var requestData = document.getElementById("requestDataInput").value;
                var method = document.getElementById("methodSelection").value;
                var endpoint = document.getElementById("endpointSelection").value;

                try {
                    var data = JSON.parse(requestData);

                    if (typeof data === 'object' && data !== null) {
                        var expectedData;
                        var missingFields = [];

                        // Colocar aqui o JSON dos métodos POST
                        if (method === "POST") {
                            if (endpoint === "Brands") {
                                expectedData = {
                                    'name': '',
                                    'reducedName': '',
                                    'partnerId': ''
                                };
                            } else if (endpoint === "Categories") {
                                expectedData = {
                                    'name': '',
                                    'partnerId': '',
                                    'priceFactor': '',
                                    'definitionPriceScope': '',
                                    'parent': {
                                        'id': ''
                                    }
                                };
                            } else if (endpoint === "Images") {
                                expectedData = {
                                    'index': '',
                                    'main': true,
                                    'url': 'string',
                                    'variation': 'string'
                                };
                            } else if (endpoint === "Products") {
                                expectedData = {
                                    'id': '',
                                    'title': '',
                                    'description': '',
                                    'externalIdProduct': '',
                                    'category': {
                                        'id': '',
                                        'name': '',
                                        'path': ''
                                    },
                                    "brand": {
                                        "id": '',
                                        "name": '',
                                        "reducedName": '',
                                        "partnerId": ''
                                    },
                                    "nbm": {
                                        'id': '',
                                        'description': ''
                                    },
                                    "origin": {
                                        "id": '',
                                        "description": ''
                                    },
                                    'model': '',
                                    'videoUrl': '',
                                    'gender': '',
                                    'warrantyTime': 0,
                                    'warrantyText': '',
                                    'height': '',
                                    'width': '',
                                    'weight': '',
                                    'length': '',
                                    'priceFactor': '',
                                    'calculatedPrice': '',
                                    'definitionPriceScope': '',
                                    'hasVariations': '',
                                    'isProductActive': '',
                                    'characteristics': [
                                        {
                                            'index': '',
                                            'name': '',
                                            'value': ''
                                        }
                                    ],
                                    'images': [
                                        {
                                            'id': '',
                                            'index': '',
                                            'main': '',
                                            'url': '',
                                            'thumbnailUrl': '',
                                            'lowResolutionUrl': '',
                                            'standardUrl': '',
                                            'originalImage': '',
                                            'variation': '',
                                            'status': '',
                                            'statusMessage': '',
                                            'standardWidth': '',
                                            'standardHeight': '',
                                            'originalWidth': '',
                                            'originalHeight': ''
                                        }
                                    ],
                                    'skus': [
                                        {
                                            'id': '',
                                            'title': '',
                                            'partnerId': '',
                                            'ean': '',
                                            'amount': '',
                                            'additionalTime': '',
                                            'price': '',
                                            'sellPrice': '',
                                            'stockLocalId': '',
                                            'variations': {
                                                '': ''
                                            },
                                            'additionalStocks': [
                                                {
                                                    'price': '',
                                                    'amount': '',
                                                    'additionalTime': '',
                                                    'stockLocalId': ''
                                                }
                                            ],
                                            'externalId': '',
                                            'active': ''
                                        }
                                    ],
                                    'allowAutomaticSkuMarketplaceCreation': ''
                                };
                            } else if (endpoint === "Sku") {
                                expectedData = {
                                    'title': '',
                                    'partnerId': '',
                                    'ean': '',
                                    'amount': '',
                                    'price': '',
                                    'additionalTime': '',
                                    'stockLocalId': '',
                                    'variations': {
                                        '': ''
                                    },
                                    'additionalStocks': [
                                        {
                                            'price': '',
                                            'amount': '',
                                            'additionalTime': '',
                                            'stockLocalId': ''
                                        }
                                    ],
                                    'externalId': ''
                                };
                            } else if (endpoint === "Sku Marketplace") {
                                expectedData = {
                                    "idInMarketplace": "",
                                    "marketPlace": "",
                                    "accountName": "",
                                    "price": Number,
                                    "discountPrice": Number,
                                    "permalink": "",
                                    "skuInMarketplace": "",
                                    "fields": {
                                        "title": "",
                                        "template": Number,
                                        "priceFactor": "",
                                        "DISCOUNT_TYPE": "",
                                        "DISCOUNT_VALUE": "",
                                        "HAS_DISCOUNT": "",
                                        "CONCAT_ATTRIBUTES": "",
                                        "delivery_type": "",
                                        "SHIPMENT": "",
                                        "crossDocking": "",
                                        "CUSTOM_DESCRIPTION": "",
                                        "EAN": "",
                                        "MANUFACTURING_TIME": "",
                                        "VALUE": "",
                                        "PERCENT": "",
                                        "bronze_price": "",
                                        "bronze_price_factor": "",
                                        "buying_mode": "",
                                        "category_with_variation": "",
                                        "condition": "",
                                        "free_price": "",
                                        "free_price_factor": "",
                                        "free_shipping": "",
                                        "gold_premium_price": "",
                                        "gold_premium_price_factor": "",
                                        "gold_price": "",
                                        "gold_price_factor": "",
                                        "gold_pro_price": "",
                                        "gold_pro_price_factor": "",
                                        "gold_special_price": "",
                                        "gold_special_price_factor": "",
                                        "listing_type_id": "",
                                        "shipping_local_pick_up": "",
                                        "shipping_mode": "",
                                        "silver_price": "",
                                        "silver_price_factor": "",
                                        "measurement_chart_id": ""
                                    }
                                };
                            } else if (endpoint === "Stocks") {
                                expectedData = 
                                    {
                                      "id": 0,
                                      "partnerId": "string",
                                      "quantity": 0,
                                      "cost": 0,
                                      "additionalTime": 0,
                                      "stockLocalId": 0
                                    };
                                } else if (endpoint === "Stocks/Locals") {
                                expectedData = {
                                    "name": "",
                                    "virtual": Boolean,
                                    "defaultLocal": Boolean,
                                    "zipCode": ""
                                };
                            } else if (endpoint === "Variations") {
                                expectedData = {
                                    "name": "",
                                    "partnerId": "",
                                    "values": [
                                        {
                                            "description": "",
                                            "partnerId": ""
                                        }
                                    ],
                                    "visualVariation": true
                                };
                            } else if (endpoint === "Variations Values") {
                                expectedData = {
                                    "description": "",
                                    "partnerId": ""
                                }
                            }
                        }

                        // Colocar aqui o JSON dos métodos PUT
                        if (method === "PUT") {
                            if (endpoint === "brands") {
                                expectedData = {
                                    'name': 'string',
                                    'reducedName': 'string',
                                    'partnerId': 'string'
                                };
                            } else if (endpoint === "products") {
                                expectedData = {
                                    "title": "string",
                                    "description": "string",
                                    "category": {
                                        "id": 'string',
                                        "name": "string",
                                        "path": "string"
                                    },
                                    "brand": {
                                        "id": 'string',
                                        "name": "string",
                                        "reducedName": "string",
                                        "partnerId": "string"
                                    },
                                    "nbm": {
                                        "id": "string"
                                    },
                                    "origin": {
                                        "id": 'string',
                                        "description": "string"
                                    },
                                    'model': 'string',
                                    'videoUrl': 'string',
                                    'gender': 'string',
                                    'warrantyTime': Number,
                                    'warrantyText': 'string',
                                    'height': 'string',
                                    'width': 'string',
                                    'weight': 'string',
                                    'length': 'string',
                                    'priceFactor': Number,
                                    'calculatedPrice': true,
                                    'definitionPriceScope': 'string',
                                    'characteristics': [
                                        {
                                            'index': 'string',
                                            'name': 'string',
                                            'value': 'string'
                                        }
                                    ],
                                    'allowAutomaticSkuMarketplaceCreation': true
                                };
                            }

                            // Adicione outras validações para diferentes endpoints aqui
                        }

                        if (expectedData !== undefined) {
                            for (var field in expectedData) {
                                if (!data.hasOwnProperty(field)) {
                                    missingFields.push(field);
                                }
                            }

                            if (missingFields.length === 0) {
                                var successMessage = 'Todos os campos estão presentes conforme o esperado.';
                                document.getElementById("errorContainer").innerHTML = successMessage;
                                document.getElementById("errorContainer").style.display = "block";
                            } else {
                                var errorMessage = 'Os seguintes campos estão ausentes: ' + missingFields.join(', ') + '.';
                                document.getElementById("errorContainer").innerHTML = errorMessage;
                                document.getElementById("errorContainer").style.display = "block";
                            }
                        } else {
                            alert('Opção inválida selecionada.');
                        }
                    } else {
                        alert('A solicitação precisa ser um objeto JSON válido.');
                    }
                } catch (error) {
                    alert('Erro ao analisar a solicitação. Verifique se é um JSON válido.');
                }
            }

            // Chame a função updateEndpoints para preencher inicialmente a lista suspensa de endpoints.
            updateEndpoints();
        </script>
    </div>
</body>

</html>
