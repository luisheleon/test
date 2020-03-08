# 4. Flujos principales del proceso de Tokenizacion

El proyecto de Tokenizacion se basa en la configuración y despliegue de una serie de flujos construidos por VISA con el objetivo que puedan interactuar con la plataforma de pagos móviles y digitales VTS (Visa Token Service). Estos flujos se dividen de la siguiente manera:

1. Flujos invocados por la aplicación principal
2. Flujos invocados por el SDK

## 4.1. Flujos invocados por la aplicación principal

Son aquellos flujos que son invocados a nivel de código en la aplicación base que integra el SDK. En esta sección se describirá en detalle la estructura e implementación de cada flujo.

### 4.1.1 Enrolamiento de un dispositivo

**Descripción**

Este flujo se encarga de enrolar el dispositivo Android en VTS. El SDK extraerá la información acerca del dispositivo y generará un ID único para la billetera **clientWalletAccountId**.

**NOTA: Se sugiere la utilización de este flujo en el login de su aplicación**

Implementación

```kt
TokenizationVisa.enrollDeviceVisa(applicationContext, dataConfiguration, object : TokenizationVisaCallback.VTSCallback {
override fun onSuccessResponse(response: ResponseTokenization) {
            //YOUR CODE HERE
}
override fun onFailedResponse(response: ResponseTokenization) {
} })
```



```java
tokenizationVisa = TokenizationVisa.INSTANCE;
tokenizationVisa.enrollDeviceVisa(getApplicationContext(), dataConfiguration, new TokenizationVisaCallback.VTSCallback() {
@Override
public void onSuccessResponse(@NotNull ResponseTokenization responseTokenization) {
         //YOUR CODE HERE
}
@Override
public void onFailedResponse(@NotNull ResponseTokenization responseTokenization) {
         //YOUR CODE HERE
    } 
});
 
```


<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
 

**Ejemplo objeto DataConfiguration**


```kt
dataConfiguration = DataConfiguration( clientID = CLIENT_SERVITEBCA, tokenData = null,
panCardData = null,
userInfo = UserInfo(
tagpay = "hmmartinez88",
email = "hmmartinez88@gmail.com", clientWalletAccountId = null
),
cards = null )
```



```java
DataConfiguration dataConfiguration = new DataConfiguration( constantsKT.CLIENT_SERVITEBCA,
null,
null,
    new UserInfo(
        "hmmartinez88",
"hmmartinez88@gmail.com",
null ),
null
)
```

**Manejo de respuestas**


<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>300</td>
            <td>Device enroll has been successfully</td>
        </tr>
        <tr>
            <td>301</td>
            <td>This device is already registered</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Fallo librería tipo: (SDK) Este dispositivo no tiene soporte NFC</td>
        </tr>
        <tr>
            <td>-2</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear la instancia de VISA</td>
        </tr>
        <tr>
            <td>-30</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear Device Info</td>
        </tr>
        <tr>
            <td>-31</td>
            <td>Fallo librería tipo: (MAP) Fallo servicio Enroll Device</td>
        </tr>
        <tr>
            <td>-32</td>
            <td>Fallo librería tipo: (MAP) Host Device existente</td>
        </tr>
        <tr>
            <td>-33</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear BoardDevicePerso</td>
        </tr>
    </tbody>
</table>


**Ejemplo objeto response exitoso**

```kt
response = ResponseTokenization( code = 300,
message = "Device enroll has been successfully", parametersTokenization = ParametersTokenization(
clientWalletId = "npJpOILs78lmnDjEWE",
dataConfiguration = DataConfiguration(...) )
)
```

**Ejemplo objeto response fallido**

```kt
response = ResponseTokenization( code = -30,
message = "Fallo librería tipo: (VISA) Fallo al crear Device Info",
parametersTokenization = null )
```


**NOTA 1:** El objeto **parametersTokenization** devuelve nuevamente el objeto **dataConfiguration**con la inserción del **clientWalletAccountId**. Modifique su objeto estático con este nuevo objeto. Si no desea utilizar este objeto puede construir sus propios objetos dataConfiguration, siga la NOTA2.

**NOTA 2:** El objeto **parametersTokenization** devuelve el atributo **clientWalletAccountId**. almacene este valor en su aplicación e insértelo en el objeto dataConfiguration donde se le indique en los flujos presentados en este documento.



### 4.1.2 Enrolamiento de una tarjeta

**Descripción**

Este flujo se encarga de enrolar una tarjeta VISA en VTS. El SDK generara un id único como token de la tarjeta **tokenKey**.

**NOTA:** Se sugiere la utilización de este flujo en la pantalla donde se ingresa los datos de la tarjeta VISA a tokenizar.

**Implementación**


```kt
TokenizationVisa.enrollCardVisa(applicationContext, dataConfiguration, object : TokenizationVisaCallback.VTSCallback {
override fun onSuccessResponse(response: ResponseTokenization) {
} })
//YOUR CODE HERE
```


```java
tokenizationVisa = TokenizationVisa.INSTANCE; tokenizationVisa.enrollCardVisa(getApplicationContext(), dataConfiguration, new TokenizationVisaCallback.VTSCallback() {
@Override
public void onSuccessResponse(@NotNull ResponseTokenization responseTokenization) {
         //YOUR CODE HERE
}
@Override
public void onFailedResponse(@NotNull ResponseTokenization responseTokenization) {
} });
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>applicationContext</td>
            <td>applicationContext</td>
        </tr>
        <tr>
            <td>dataConfiguration</td>
            <td>Contiene el objeto DataConfiguration()</td>
        </tr>
    </tbody>
</table>


**NOTA:** Los datos de la tarjeta a enrolar y tokenizar se deben colocar en un objeto de tipo **PanCardData()** propio del SDK.

**Ejemplo objeto PanCardData**


```kt
panCardData = PanCardData( accountNumber = "4352149418965993", name = "Jhon Smith",
cvv2 = "824",
expirationDate = ExpirationDate(
) )
```


```java
PanCardData panCardData = new PanCardData( "4352149418965993",
"Jhon Smith",
"824",
    new ExpirationDate(
       "11",
"2020"
) )
```


- Inserte el objeto **panCardData** creado anteriormente en el atributo **panCardData** del objeto **DataConfiguration**
- Si no actualizo el objeto **DataConfiguration** proporcionado en la respuesta del **enrollDevice**, por favor inserte el valor **clientWalletAccountId** en el atributo **userInfo** del objeto **DataConfiguration**.
- Si no actualizo el objeto **DataConfiguration** proporcionado en la respuesta del enrollDevice, por
favor inserte un ArrayList vacío en el atributo **cards** del objeto **DataConfiguration**.


**Ejemplo objeto DataConfiguration**

```kt
dataConfiguration = DataConfiguration( clientID = CLIENT_SERVITEBCA, tokenData = null,
panCardData = panCardData, userInfo = UserInfo(
tagpay = "hmmartinez88",
email = "hmmartinez88@gmail.com", clientWalletAccountId = "npJpOILs78lmnDjEWE"
 ),
 cards = ArrayList()
}
```


```java
DataConfiguration dataConfiguration = new DataConfiguration( constantsKT.CLIENT_SERVITEBCA,
null,
panCardData,
    new UserInfo(
        "hmmartinez88",
"hmmartinez88@gmail.com",
        "npJpOILs78lmnDjEWE"
),
    new ArrayList()
)
```

**Manejo de respuestas**

<table>
     <thead>
        <tr>
            <th>Código</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>400</td>
            <td>Card has been successfully enrolled</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Fallo librería tipo: (SDK) Este dispositivo no tiene soporte NFC</td>
        </tr>
        <tr>
            <td>-2</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear la instancia de VISA</td>
        </tr>
        <tr>
            <td>-32</td>
            <td>Fallo librería tipo: (MAP) Host Device Existente</td>
        </tr>
        <tr>
            <td>-40</td>
            <td>Fallo librería tipo: (VISA) No se encontró Wallet ID</td>
        </tr>
        <tr>
            <td>-41</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear Store Provisoned Token </td>
        </tr>
        <tr>
            <td>-42</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear Provision ACK</td>
        </tr>
        <tr>
            <td>-43</td>
            <td>Fallo librería tipo: (MAP) No se obtuvo respuesta en el provision Token</td>
        </tr>
        <tr>
            <td>-44</td>
            <td>Fallo librería tipo: (MAP) No se obtuvo respuesta en el enrollPan</td>
        </tr>
        <tr>
            <td>-45</td>
            <td>Fallo librería tipo: (DATOS) No se ingreso Wallet ID</td>
        </tr>
        <tr>
            <td>-73</td>
            <td>Fallo librería tipo: (MAP) La tarjeta ya existe</td>
        </tr>
        <tr>
            <td>-74</td>
            <td>Fallo librería tipo: (VISA) Fallo al enrolar</td>
        </tr>
    </tbody>
</table>


**Ejemplo objeto response exitoso**


```kt
response = ResponseTokenization( code = 400,
message = "Card has been successfully enrolled", parametersTokenization = ParametersTokenization(
tokenID = "eyJ0b2tlbklkIjo0fQ==", panEnrollID = "713545789754312321545", enrrollPanResponse = EnrollPanResponse(...), dataConfiguration = DataConfiguration(...)
        )
    )
)
```

**Ejemplo objeto response fallida**


```kt
response = ResponseTokenization( code = -41,
message = "Fallo libreria tipo: (VISA) Fallo al crear Store Provisioned Token",
parametersTokenization = null )
```

- Si la respuesta es exitosa, esta devolverá nuevamente el objeto dataConfiguration con los datos de la tarjeta tokenizada, actualice el objeto estático de su aplicación principal con este objeto.
- Si la respuesta es exitosa, llame inmediatamente el flujo de ‘metadata de la tarjeta tokenizada’


### 4.1.3 Metadata de la tarjeta tokenizada

**Descripción**

Este flujo se encarga de suministrar la información acerca de la tarjeta tokenizada.

**Implementación**

```kt
TokenizationVisa.getContentCard(applicationContext, dataConfiguration!!, requiredContent object : TokenizationVisaCallback.VTSCallback {
override fun onFailedResponse(response: ResponseTokenization) {
            //YOUR CODE HERE
}
override fun onSuccessResponse(response: ResponseTokenization) {
            //YOUR CODE HERE
} })
```


```java
tokenizationVisa = TokenizationVisa.INSTANCE; tokenizationVisa.getContentCard(applicationContext, dataConfiguration!!, requiredContent
new TokenizationVisaCallback.VTSCallback() {
@Override
public void onFailedResponse(@NotNull ResponseTokenization responseTokenization) {
     //YOUR CODE HERE
}

@Override
public void onSuccessResponse((@NotNull ResponseTokenization responseTokenization) {
       //YOUR CODE HERE
} })
``` 
<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>applicationContext</td>
            <td>Contexto de la aplicación base</td>
        </tr>
        <tr>
            <td>dataConfiguration</td>
            <td>Contiene el objeto DataConfiguration()</td>
        </tr>
         <tr>
            <td>position</td>
            <td>Posición del arreglo cards del objeto DataConfiguration()</td>
        </tr>
         <tr>
            <td>requiredContent</td>
            <td>Clave para traer el contenido de la tarjeta. Para este flujo el valor seria <strong>CONTENT_CARD_KEY</strong></td>
        </tr>
    </tbody>
</table>

**Ejemplo objeto DataConfiguration**

```kt
dataConfiguration = DataConfiguration( clientID = CLIENT_SERVITEBCA, tokenData = TokenData(
tokenID = "eyJ0b2tlbklkIjo0fQ==",
tokenStatus = null ),
panCardData = null, userInfo = UserInfo(
tagpay = "hmmartinez88",
email = "hmmartinez88@gmail.com", clientWalletAccountId = "npJpOILs78lmnDjEWE"
),
cards = [0],[1],[2],...,[n] )
```

**Manejo de respuestas**

<table>
     <thead>
        <tr>
            <th>Código</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>901</td>
            <td>Card’s Content has been successfully obtained</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Fallo librería tipo: (SDK) Este dispositivo no tiene soporte NFC</td>
        </tr>
         <tr>
            <td>-2</td>
            <td>Fallo librería tipo: (SDK) Fallo al crear la instancia de VISA</td>
        </tr>
         <tr>
            <td>-31</td>
            <td>Fallo librería tipo: (MAP) Fallo servicio Enroll Device</td>
        </tr>
        <tr>
            <td>-32</td>
            <td>Fallo librería tipo: (MAP) Host Device Existente </td>
        </tr>
        <tr>
            <td></td>
            <td>Fallo librería tipo: (VISA) No existe el TokenKey</td>
        </tr>
        <tr>
            <td>-75</td>
            <td>Fallo librería tipo: (MAP) Fallo al obtener el contenido</td>
        </tr>
    </tbody>
</table>

**Ejemplo objeto response exitoso**

```kt
response = ResponseTokenization( code = 400,
message = "Card has been successfully enrolled", parametersTokenization = ParametersTokenization(
responseContent = PrintCard(), dataConfiguration = DataConfiguration(...), lastDataCardToken = DataTokenizationCard(...),
)
```

**Ejemplo objeto response fallido**

```kt
response = ResponseTokenization( code = -75,
message = "Fallo librería tipo: (MAP) Fallo al obtener el contenido",
parametersTokenization = null )
```

Si la respuesta es exitosa, esta devolverá el objeto lastDataCardToken que contiene todo el detalle de la tarjeta. Puede utilizar este objeto para almacenarlo en un arreglo que contenga todas las tarjetas tokenizadas en su aplicación principal

**ID DE ENROLAMIENTO**

Este ID se encuentra ubicado en lastDataCardToken.vPanEnrollmentID

**ID DEL TOKEN**

El token de la tarjeta está ubicado en lastDataCardToken.vProvisionedToken

**ARTE DE LA TARJETA**

El arte de la tarjeta esta codificado en base 64, esta se encuentra ubicada en lastDataCardToken.card.content.encodedData

**ULTIMOS CUATRO DIGITOS DE LA TARJETA TOKENIZADA**

Los últimos cuatro de la tarjeta está ubicado en lastDataCardToken.card.cardInfo.last4


#### 4.1.3.1 Eliminación de una tarjeta tokenizada

**Descripción**

Este flujo se encargará de eliminar una tarjeta que ha sido enrolada y tokenizada previamente. Su función principal es eliminar la información de VTS y suprimirla del arreglo cards del objeto DataConfiguration.

**Implementación**

```kt
TokenizationVisa.lifecycleManagerTokenVisa(applicationContext, dataConfiguration!!, object : TokenizationVisaCallback.VTSCallback {
override fun onFailedResponse(response: ResponseTokenization) { //YOUR CODE IS HERE
}
override fun onSuccessResponse(response: ResponseTokenization) {
//YOUR CODE IS HERE
}
}) }
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>applicationContext</td>
            <td>Contexto de la aplicación base</td>
        </tr>
        <tr>
            <td>dataConfiguration</td>
            <td>Contiene el objeto DataConfiguration()</td>
        </tr>
    </tbody>
</table>

**NOTA:** Para eliminar una tarjeta se debe pasar el valor **ACTION_TOKEN_DELETE** propio del SDK en el atributo tokenStatus del objeto TokenData que pertenece al objeto **DataConfiguration()**.

**Ejemplo objeto DataConfiguration**

```kt
dataConfiguration = DataConfiguration( country = "Ve",
session = "013c2cdd1d87a3413d5f1e017d922777", authorization = "d565bfc95e6da7d1ae44d4944db71841", urlBase = "https://d-api-vip.novopayment.net/", tokenData = TokenData(
tokenID = dataConfiguration?.cards?.get(position)?.vProvisionedToken!!,
tokenStatus = ACTION_TOKEN_DELETE ),
panCardData = null, userInfo = null,
cards = [0],[1],[2],...,[n]
)
```

**Manejo de respuestas**

<table>
     <thead>
        <tr>
            <th>Código</th>
            <th>Mensajes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>601</td>
            <td>Token has been successfully deleted</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Fallo librería tipo: (SDK) Este dispositivo no tiene soporte NFC</td>
        </tr>
         <tr>
            <td>-2</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear la instancia de VISA</td>
        </tr>
        <tr>
            <td>-56</td>
            <td>Fallo libreria tipo: (VISA) No existe el TokenKey</td>
        </tr>
         <tr>
            <td>-60</td>
            <td>Fallo libreria tipo: (VISA) Fallo al crear constructLcmRequest</td>
        </tr>
        <tr>
            <td>-61</td>
            <td>Fallo librería tipo: (MAP) Fallo el servicio Lifecycle Token</td>
        </tr>
         <tr>
            <td>-62</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear updateTokenStatus</td>
        </tr>
        <tr>
            <td>-63</td>
            <td>Fallo librería tipo: (DATOS) Compruebe que se halla ingresado el TokenKey y el TokenStatus</td>
        </tr>
    </tbody>
</table>

**Ejemplo objeto response exitoso**

```kt
response = ResponseTokenization( code = 601,
message = "Token has been successfully deleted",
parametersTokenization = null )
```

**Ejemplo objeto response fallido**


```kt
response = ResponseTokenization( code = -60,
message = "Fallo libreria tipo: (VISA) Fallo al crear constructLcmRequest",
parametersTokenization = null )
```

### 4.1.4 Seleccionar una tarjeta para pagos

**Descripción**

Este flujo se encargará de seleccionar una tarjeta para realizar pagos contacless.

**Implementación**

```kt
TokenizationVisa.selectCardVisa(applicationContext, dataConfiguration!!, position, supportFragmentManager,
object : TokenizationVisaCallback.VTSCallback {
override fun onFailedResponse(response: ResponseTokenization) {
        // YOUR CODE IS HERE
    }
override fun onSuccessResponse(response: ResponseTokenization) { // YOUR CODE IS HERE
} })
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>applicationContext</td>
            <td>Contexto de la aplicación base</td>
        </tr>
        <tr>
            <td>dataConfiguration</td>
            <td>Contiene el objeto DataConfiguration()</td>
        </tr>
        <tr>
            <td>position</td>
            <td>Positión del arreglo cards del objeto DataConfiguration()</td>
        </tr>
        <tr>
            <td>supportFragmentManager</td>
            <td>SuppostFragmentManager de la aplicación base</td>
        </tr>
    </tbody>
</table>

**Ejemplo objeto DataConfiguration**


```kt
dataConfiguration = DataConfiguration(
country = "Ve",
session = "013c2cdd1d87a3413d5f1e017d922777", authorization = "d565bfc95e6da7d1ae44d4944db71841", urlBase = "https://d-api-vip.novopayment.net/", tokenData = TokenData(
tokenID = dataConfiguration?.cards?.get(position)?.vProvisionedToken!!,
tokenStatus = null, ),
panCardData = null, userInfo = null,
cards = [0],[1],[2],...,[n]
)
```

**Manejo de respuestas**

<table>
     <thead>
        <tr>
            <th>Código</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>700</td>
            <td>Card has been successfulyl selected</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Fallo librería tipo: (SDK) Este dispositivo no tiene soporte NFC</td>
        </tr>
        <tr>
            <td>-2</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear la instancia de VISA</td>
        </tr>
        <tr>
            <td>-55</td>
            <td>Fallo librería tipo: (DATOS) No se ingresó TokenID</td>
        </tr>
         <tr>
            <td>-56</td>
            <td>Fallo librería tipo: (VISA) No existe el TokenKey</td>
        </tr>
         <tr>
            <td>-76</td>
            <td>Fallo librería tipo: (SDK) No se puede seleccionar una tarjeta que no esté activa</td>
        </tr>
    </tbody>
</table>

**Ejemplo objeto response exitoso**

NA.

**Nota:** Aparece modal para realizar el pago contactless con la tarjeta seleccionada.

Ejemplo objeto response fallido

```kt
response = ResponseTokenization( code = -76,
message = "Fallo librería tipo: (SDK) No se puede seleccionar una tarjeta que no
 esté activa", parametersTokenization = null
)
```

### 4.1.5 Acceder al historial de transacciones por tarjeta tokenizada

Este flujo se encarga de obtener toda la información de las transacciones realizadas por tarjeta tokenizada.

**Implementación**

```kt
TokenizationVisa.getTransactionHistory(applicationContext, dataConfiguration,
object : TokenizationVisaCallback.VTSCallback {
override fun onFailedResponse(response: ResponseTokenization) {
        // YOUR CODE IS HERE
    }
override fun onSuccessResponse(response: ResponseTokenization) { // YOUR CODE IS HERE
} })
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>applicationContext</td>
            <td>Contexto de la aplicación base</td>
        </tr>
        <tr>
            <td>dataConfiguration</td>
            <td>Contiene el objeto DataConfiguration()</td>
        </tr>
    </tbody>
</table>

**Ejemplo objeto DataConfiguration**

```kt
dataConfiguration = DataConfiguration( country = "Ve",
session = "013c2cdd1d87a3413d5f1e017d922777", authorization = "d565bfc95e6da7d1ae44d4944db71841", urlBase = "https://d-api-vip.novopayment.net/", tokenData = TokenData(
tokenID = dataConfiguration?.cards?.get(position)?.vProvisionedToken!!,
tokenStatus = null, ),
panCardData = null, userInfo = null,
cards = [0],[1],[2],...,[n]
)
```

**Manejo de respuestas**


<table>
     <thead>
        <tr>
            <th>Código</th>
            <th>Mensaje</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>902</td>
            <td>Cards transactions have been successfully obtained</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Fallo librería tipo: (SDK) Este dispositivo no tiene soporte NFC</td>
        </tr>
        <tr>
            <td>-2</td>
            <td>Fallo librería tipo: (VISA) Fallo al crear la instancia de VISA</td>
        </tr>
        <tr>
            <td>-77</td>
            <td>Fallo librería tipo: (MAP) No se puede obtener las transacciones</td>
        </tr>
    </tbody>
</table>


**Ejemplo objeto response exitoso**

```kt
response = ResponseTokenization( code = 902,
message = "Cards transactions have been successfully obtained",
parametersTokenization = ParametersTokenization( clientWalletId = null,
tokenID = null,
panEnrollID = null,
cardMetadataUpdateResponse = null,
responseContent = null,
responseTransactionHistory = ResponseTransactionHistory(), enrrollPanResponse = null,
) )
```
**Ejemplo objeto response fallido**

```kt
response = ResponseTokenization( code = -77,
message = "Fallo librería tipo: (MAP) No se puede obtener las transacciones",
parametersTokenization = null )
```

### 4.1.6 Obtener las tarjetas tokenizadas

Este método obtiene las tarjetas que han sido tokenizadas.


```kt
 val cards :ArrayList<DataTokenizationCard>? = TokenizationVisa.getTokenizationCards()
```

**Estructura objecto Cards**

```kt
data class DataTokenizationCard (
    var card: PrintCard?,
    var vProvisionedToken: String?,
    var vPanEnrollmentID: String?
)
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Tipo</th>
            <th>Descripción</th>    
        </tr>
    </thead>
    <tbody>
        <tr>
           <td>card</td>
           <td>PrintCard</td>
           <td>Contiene información de la tarjeta</td>
        </tr>
        <tr>
           <td>vProvisionedToken</td>
           <td>String</td>
           <td>Token asignado para pago</td>
        </tr>
        <tr>
           <td>vPanEnrollmentId</td>
           <td>String</td>
           <td></td>
        </tr>
    </tbody>
</table>

```kt
data class PrintClass (
    var content: ResponseContentGUI?,
    var cardInfo: CardInfo?
)
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Tipo</th>
            <th>Descripción</th>    
        </tr>
    </thead>
    <tbody>
        <tr>
           <td>content</td>
           <td>ResponseContentGUI</td>
           <td>Contiene información para mostrar al usuario la tarjeta</td>
        </tr>
        <tr>
           <td>cardInfo</td>
           <td>CardInfo</td>
           <td>Información de la tarjeta</td>
        </tr>
    </tbody>
</table>


```kt
data class CardInfo (
    var month: String?,
    var year: String?,
    var last4: String?
)
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Tipo</th>
            <th>Descripción</th>    
        </tr>
    </thead>
    <tbody>
        <tr>
           <td>month</td>
           <td>String</td>
           <td>Mes de expiración de la tarjeta</td>
        </tr>
        <tr>
           <td>year</td>
           <td>String</td>
           <td>Año de expiración de la tarjeta</td>
        </tr>
        <tr>
           <td>Last4</td>
           <td>String</td>
           <td>Últimos 4 dígitos de la tarjeta</td>
        </tr>
    </tbody>
</table>


```kt
data class ResponseContentGUI (
    var mimeType: String?,
    var width: String?,
    var heigth: String?,
    var encodedData: String? 
)
```

<table>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Tipo</th>
            <th>Descripción</th>    
        </tr>
    </thead>
    <tbody>
        <tr>
           <td>mimeType</td>
           <td>String</td>
           <td>Tipo de formato del recurso de la tarjeta</td>
        </tr>
        <tr>
           <td>width</td>
           <td>String</td>
           <td>Ancho del recurso de la tarjeta</td>
        </tr>
        <tr>
           <td>height</td>
           <td>String</td>
           <td>Alto del recurso de la tarjeta</td>
        </tr>
        <tr>
           <td>encodedData</td>
           <td>String</td>
           <td>Data en formato Base64 para mostrar la imagen de la tarjeta</td>
        </tr>
    </tbody>
</table>


