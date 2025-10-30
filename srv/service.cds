@protocol: 'rest'  // To Hide the URL to end
service btpapp {
    function printstring (input: String) returns String;

    function add (num1: Integer,num2: Integer) returns Integer;

 @open
    type  object {};
    function anyinput (brand: String) returns object;

 @open
  function getPurchaseOrderDetails(poNumber: String) returns object;
}