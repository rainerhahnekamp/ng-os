import { InjectionToken } from '@angular/core';
import { Vocabulary } from '@ng-os/vocabulary-trainer/feature';

export const VOCABULARY_SET = new InjectionToken<Vocabulary[]>(
  'VOCABULARY_SET'
);
