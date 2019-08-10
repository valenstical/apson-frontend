declare var PaystackPop;
export class PaystackWidget {
  handler: any;
  constructor({ key, ref, plan, email }, onSuccess, onFailure) {
    this.handler = PaystackPop.setup({
      key,
      email,
      ref,
      plan,
      callback: function(response) {
        onSuccess(response);
      },
      onClose: function() {
        onFailure();
      },
    });
  }
  open() {
    this.handler.openIframe();
  }
}
