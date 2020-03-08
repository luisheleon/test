#  3 Implementaciones

## 3.1 Dialogo para realizar pagos

Esta implementación es necesaria conocer desde la aplicación base cuando el tiempo de la tarjeta selecciona se expira:

**implements**

```kt
PaymentDialogFragment.PaymentDialogListener
```

Métodos a sobrescribir:

```kt
override fun timeSelectedCardFinish() {
//TODO ("Código necesario cuando expire tiempo para pago")
}
```

## 3.2 Dialogo para pago exitoso

Esta implementación es necesaria conocer desde la aplicación base cuando el pago fue exitoso 

**implements**

```kt
AnimationVisaFragment.AnimationPaymentListener
```

Métodos a sobrescribir

```kt
override fun onCompletePayment() {
//TODO ("Código necesario cuando el pago es exitoso")
}
```



 
