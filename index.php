<?php require_once "../sessao.php"; ?>
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

        <textarea id="requestDataInput" rows="10" placeholder="Cole a solicitação aqui..."></textarea>
        <div id="errorMessageContainer" class="error-message" style="display: none;"></div>

        <br>
        <label for="selection">Escolha o Endpoint:</label>
        <select id="selection">
            <option value="brands">Brands</option>
            <option value="categories">Categories</option>
            <option value="products">Products</option>
            <option value="stocks">Stocks</option>
            <option value="variations">Variations</option>
        </select>

        <button onclick="validateRequest()">Validar</button>


        <script>
            function validateRequest() {
                var requestData = document.getElementById("requestDataInput").value;

                try {
                    var data = JSON.parse(requestData);

                    if (typeof data === 'object' && data !== null) {
                        var expectedData;
                        var missingFields = [];

                        // Verifica qual parte do payload foi selecionada
                        var selection = document.getElementById("selection");
                        var selectedValue = selection.options[selection.selectedIndex].value;

                        if (selectedValue === "brands") {
                            expectedData = {
                                'name': '',
                                'reducedName': '',
                                'partnerId': ''
                            };
                        } else if (selectedValue === "categories") {
                            expectedData = {
                                'name': '',
                                'partnerId': '',
                                'priceFactor': '',
                                'definitionPriceScope': '',
                                'parent': {
                                    'id': ''
                                }
                            };
                        } else if (selectedValue === "products") {
                            expectedData = {
                                'id': '',
                                'title': 'string',
                                'description': 'string',
                                'externalIdProduct': 'string',
                                'category': {
                                    'id': 0,
                                    'name': 'string',
                                    'path': 'string'
                                },
                                'brand': {
                                    'id': 123456,
                                    'name': 'Brastemp',
                                    'reducedName': 'brastemp',
                                    'partnerId': 'marca-001-brastemp'
                                },
                                'nbm': {
                                    'id': 'string',
                                    'description': 'string'
                                },
                                'origin': {
                                    'id': 0,
                                    'description': 'string'
                                },
                                'model': 'string',
                                'videoUrl': 'string',
                                'gender': 'MALE',
                                'warrantyTime': 0,
                                'warrantyText': 'string',
                                'height': -1.7976931348623157e+308,
                                'width': -1.7976931348623157e+308,
                                'weight': -1.7976931348623157e+308,
                                'length': -1.7976931348623157e+308,
                                'priceFactor': 1,
                                'calculatedPrice': true,
                                'definitionPriceScope': 'SKU',
                                'hasVariations': false,
                                'isProductActive': true,
                                'characteristics': [{
                                    'index': 0,
                                    'name': 'string',
                                    'value': 'string'
                                }],
                                'images': [{
                                    'id': 0,
                                    'index': 0,
                                    'main': false,
                                    'url': 'http://example.com',
                                    'thumbnailUrl': 'http://example.com',
                                    'lowResolutionUrl': 'http://example.com',
                                    'standardUrl': 'http://example.com',
                                    'originalImage': 'http://example.com',
                                    'variation': 'Azul',
                                    'status': 'UNPROCESSED',
                                    'statusMessage': 'string',
                                    'standardWidth': 0,
                                    'standardHeight': 0,
                                    'originalWidth': 0,
                                    'originalHeight': 0
                                }],
                                'skus': [{
                                    'id': 0,
                                    'title': 'string',
                                    'partnerId': 'string',
                                    'ean': 'string',
                                    'amount': 0,
                                    'additionalTime': 0,
                                    'price': 0,
                                    'sellPrice': 0,
                                    'stockLocalId': 0,
                                    'variations': [{
                                        'Tipo de Variação': 'Cor : Azul'
                                    }],
                                    'additionalStocks': [{
                                        'price': 0,
                                        'amount': 0,
                                        'additionalTime': 0,
                                        'stockLocalId': 0
                                    }],
                                    'externalId': 'string'
                                }],
                                'allowAutomaticSkuMarketplaceCreation': true
                            };
                        } else if (selectedValue === "stocks") {
                            expectedData = {
                                'id': '',
                                'partnerId': '',
                                'quantity': '',
                                'cost': '',
                                'additionalTime': '',
                                'stockLocalId': ''
                            };
                        } else if (selectedValue === "variations") {
                            expectedData = {
                                "name": "string",
                                "partnerId": "string",
                                "values": [{
                                    "description": "string",
                                    "partnerId": "string"
                                }],
                                "visualVariation": true
                            };
                        }

                        // Verifica se cada campo esperado está presente no objeto recebido
                        for (var field in expectedData) {
                            if (!data.hasOwnProperty(field)) {
                                missingFields.push(field);
                            }
                        }

                        if (missingFields.length === 0) {
                            var successMessage = 'Todos os campos estão presentes conforme o esperado.';
                            document.getElementById("errorMessageContainer").innerHTML = successMessage;
                            document.getElementById("errorMessageContainer").style.display = "block";
                        } else {
                            var errorMessage = 'Os seguintes campos estão ausentes: ' + missingFields.join(', ') + '.';
                            document.getElementById("errorMessageContainer").innerHTML = errorMessage;
                            document.getElementById("errorMessageContainer").style.display = "block";
                        }
                    } else {
                        alert('A solicitação precisa ser um objeto JSON válido.');
                    }
                } catch (error) {
                    alert('Erro ao analisar a solicitação. Verifique se é uma solicitação GET válida em formato JSON.');
                }
            }
        </script>
    </div>
</body>

</html>