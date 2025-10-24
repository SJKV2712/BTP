@protocol: 'rest'  // To Hide the URL to end
service btpapp {
    function printstring (input: String) returns String;

    function add (num1: Integer,num2: Integer) returns Integer;

 @open
    type  object {};
    function anyinput (brand: String) returns object;

  @open
  function createPO (CompanyCode: String,
                     PurchaseOrderType: String,
                     PurchasingOrganization: String,
                     PurchasingGroup: String,
                     Supplier: String,
                     Material: String,
                     Plant: String,
                     OrderQuantity: Integer,
                     Unit: String,
                     NetPrice: Decimal) returns String;
}