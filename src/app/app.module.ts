import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { SF_MODULES } from "./sf-modules";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MtSampleNavComponent } from "./mt-sample-exercise/mt-sample-nav.component";
import { SAMPLE_COMPONENTS } from "./mt-sample-exercise";
import { MtAutoCompleteComponent } from "./mt-autocomplete/mt-autocomplete.component";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { appReducers } from "./store/app.reducer";
import { effectsArr } from "./store/effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SF_MODULES,
    RouterModule.forRoot([
      { path: "list-detail", component: MtSampleNavComponent },
      { path: "auto-complete", component: MtAutoCompleteComponent },
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArr),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SAMPLE_COMPONENTS,
    MtAutoCompleteComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
  ],
})
export class AppModule {}
