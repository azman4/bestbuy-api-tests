Feature: Verify Creation, Updation and Deletion of a Product

   @CreateProduct @BestBuyE2E
   Scenario: Verify Creation of a Product - using POST request
      Given I request the Post "productEndpoint" endpoint with "createProductPayload" payload, I get "APIStatusCode201" in response
      Then I request the Get "productEndpoint" endpoint, I get "APIStatusCode200" in response

   @UpdateProduct @BestBuyE2E
   Scenario: Verify Updation of a Product - using PATCH request
      Given I request the Patch "productEndpoint" endpoint with "updateProductPayload" payload, I get "APIStatusCode200" in response
      Then I request the Get "productEndpoint" endpoint, I get "APIStatusCode200" in response

   @DeleteProduct @BestBuyE2E
   Scenario: Verify Deletion of a Product - using DELETE request
      Given I request the Delete "productEndpoint" endpoint, I get "APIStatusCode200" in response
      Then I request the Get "productEndpoint" endpoint, I get "APIStatusCode404" in response and verify that product is deleted
      