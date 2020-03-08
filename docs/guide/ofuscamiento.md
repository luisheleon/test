# 6. Ofuscamiento

## 6.1 Configuración

Incluir las siguientes propiedades en el archivo de reglas de proguard:


```kt
 -dontwarn com.novopayment.tokenization.**a
 -keep class com.novopayment.tokenizationlib.dominian.model.** { *; }
 -keep class com.visa.** { *; }
 ```
Se recomienda también usar las siguientes propiedades para minificar código y eliminar todos los comentarios al momento de compilar la aplicación, en cada variable de entorno del archivo Gradle

 ```kt
 minifyEnabled true
 shrinkResources true
 ```