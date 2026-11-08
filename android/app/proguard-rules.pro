# Project specific ProGuard rules for Capacitor & Web App

# Preserve Capacitor and Cordova classes and interfaces
-keep public class * extends com.getcapacitor.Plugin
-keep public class com.getcapacitor.** { *; }
-keep class com.getcapacitor.Bridge { *; }
-keep class com.getcapacitor.BridgeWebView { *; }
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Preserve line numbers for deobfuscation in Play Console
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# Ignore optional missing references
-dontwarn org.apache.cordova.**
-dontwarn com.getcapacitor.**
