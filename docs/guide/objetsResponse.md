# 2. Objetos de configuración y respuesta

 Para los distintos flujos se podrá solicitar un objeto el cual contenga una serie de atributos para la correcta
 configuración del SDK, de la misma manera todos los flujos responderán a un objeto en común que traerá

 ## 2.1. Objeto DataConfiguration

 Este objeto se recibe como parámetro en distintos flujos de la librería, contiene información relevante para el correcto funcionamiento del SDK. Este objeto está compuesto por:
 
### 2.1.1. DataConfiguration
<table>
    <thead>
        <tr>
            <th colspan=3>DataConfiguration()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=3>clientID</td>
             <td rowspan=3>Define el tipo de cliente</td>
            <td>CLIENT_SERVITEBCA</td>
        </tr>
        <tr>
            <td>CLIENT_VISANET</td>
        </tr>
        <tr>
            <td>CLIENT_VIPAY</td>
        </tr>
        <tr>
            <td>tokenData</td>
            <td>Contiene información sobre el token para una tarjeta especifica</td>
            <td>TokenData</td>
        </tr>
        <tr>
            <td>panCardData</td>
            <td>Detalle de la tarjeta a enrolar</td>
            <td>PanCardData</td>
        </tr>
        <tr>
            <td>cards</td>
            <td>Contiene arreglo de las tarjetas enroladas</td>
            <td>ArrayList< DataTokenizationCard></td>
        </tr>
    </tbody>
</table>


### 2.1.2. UserInfo

<table>
    <thead>
        <tr>
            <th colspan=3>UserInfo()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>userID</td>
             <td>Identificador de usuario</td>
            <td>String</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>Correo electrónico del usuario</td>
            <td>String</td>
        </tr>
        <tr>
            <td>clientWalletAccountId</td>
            <td>ID único de la billetera</td>
            <td>String</td>
        </tr>
    </tbody>
</table>



### 2.1.3. TokenData



<table>
    <thead>
        <tr>
            <th colspan=3>TokenData()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tokenID</td>
            <td>Identificador único que representa una tarjeta Visa</td>
            <td>String</td>
        </tr>
        <tr>
            <td>tokenStatus</td>
            <td>Identificador del ciclo de vida del token a ejecutar</td>
            <td>String</td>
        </tr>
    </tbody>
</table>

### 2.1.4. PanCardData

<table>
    <thead>
        <tr>
            <th colspan=3>PanCardData()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>accountNumber</td>
            <td>Identificador único que representa una tarjeta Visa</td>
            <td>String</td>
        </tr>
        <tr>
            <td>name</td>
            <td>Identificador del ciclo de vida del token a ejecutar</td>
            <td>String</td>
        </tr>
        <tr>
            <td>CVV2</td>
            <td>Código de verificación de la tarjeta Visa que aparece al respaldo</td>
            <td>String</td>
        </tr>
        <tr>
            <td>expirationDate</td>
            <td>Contiene información sobre la fecha de expiración de la tarjeta Visa</td>
            <td>ExpirationDate</td>
        </tr>
    </tbody>
</table>


### 2.1.5. ExpirationDate

<table>
    <thead>
        <tr>
            <th colspan=3>UserInfo()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>month</td>
            <td>Mes de expiración</td>
            <td>String</td>
        </tr>
        <tr>
            <td>year</td>
            <td>Año de expiración</td>
            <td>String</td>
        </tr>
    </tbody>
</table>


### 2.1.6. DataTokenizationCard

<table>
    <thead>
        <tr>
            <th colspan=3>UserInfo()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>card</td>
            <td>Contiene información sobre el arte de la tarjeta</td>
            <td>PrintCard</td>
        </tr>
        <tr>
            <td>vProvisionedToken</td>
            <td>Id del token provisionado</td>
            <td>String</td>
        </tr>
        <tr>
            <td>vPanEnrollmentID</td>
            <td>ID del enrolamiento de la tarjeta</td>
            <td>String</td>
        </tr>
    </tbody>
</table>


**Nota: Se recomienda que este objeto sea de tipo estático. Ya que se va a utilizar durante todo el ciclo de vida de la aplicación.**



 ## 2.2. Objeto DataConfiguration

Para los distintos flujos se podrá solicitar un objeto el cual contenga una serie de atributos para la correcta
 configuración del SDK, de la misma manera todos los flujos responderán a un objeto en común que traerá
 
### 2.2.1. Objeto DataConfiguration

Este objeto se recibe como parámetro en distintos flujos de la librería, contiene información relevante para el correcto funcionamiento del SDK. Este objeto está compuesto por:


<table>
    <thead>
        <tr>
            <th colspan=3>ResponseTokenization()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>code</td>
            <td>Código de la respuesta</td>
            <td>String</td>
        </tr>
        <tr>
            <td>message</td>
            <td>Descripción de la respuesta</td>
            <td>String</td>
        </tr>
        <tr>
            <td>parametersTokenization</td>
            <td>Contiene información sobre el proceso de Tokenización</td>
            <td>ParametersTokenization</td>
        </tr>
    </tbody>
</table>


### 2.2.2. ParametersTokenization

<table>
    <thead>
        <tr>
            <th colspan=3>UserInfo()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>quitar</td>
            <td>quitar</td>
            <td>quitar</td>
        </tr>
        <tr>
            <td>quitar</td>
            <td>quitar</td>
            <td>quitar</td>
        </tr>
        <tr>
            <td>quitar</td>
            <td>quitar</td>
            <td>quitar</td>
        </tr>
    </tbody>
</table>


<table>
    <thead>
        <tr>
            <th colspan=3>UserInfo()</th>
        </tr>
    </thead>
     <thead>
        <tr>
            <th>Atributo</th>
            <th>Descripción</th>
            <th>Tipo de Dato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>clientWalletId</td>
            <td>Id único de la billetera</td>
            <td>String</td>
        </tr>
        <tr>
            <td>tokenID</td>
            <td>ID del token provisionado</td>
            <td>String</td>
        </tr>
        <tr>
            <td>panEnrollID</td>
            <td>ID del enrolamiento de la tarjeta</td>
            <td></td>
        </tr>
         <tr>
            <td>cardMetadataUpdateResponse</td>
            <td>Objeto que trae el detalle de la metadata de la tarjeta enrollada</td>
            <td>CardMetadataUpdateResponse</td>
        </tr>
        <tr>
            <td>responseContent</td>
            <td>Objeto que contiene la información sobre el arte de la tarjeta</td>
            <td>PrintCard</td>
        </tr>
        <tr>
            <td>responseTransactionHistory</td>
            <td>Objeto que trae el detalle de las Transacciones</td>
            <td>ResponseTransactionHistory</td>
        </tr>
         <tr>
            <td>enrrollPanResponse</td>
            <td>Objeto que trae la respuesta del enrolamiento de tarjeta</td>
            <td>EnrollPanResponse</td>
        </tr>
        <tr>
            <td>dataConfiguration</td>
            <td>Objeto de configuración modificado con la respuesta del endpoint aplicado</td>
            <td>DataConfiguration</td>
        </tr>
        <tr>
            <td>lastDataCardToken</td>
            <td>Objeto que devuelve toda la información de la última tarjeta tokenizada</td>
            <td>DataTokenizationCard</td>
        </tr>
    </tbody>
</table>


