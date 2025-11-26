import {
  inject,
  KeyValueChangeRecord,
  KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  Pipe,
  PipeTransform,
} from '@angular/core'

@Pipe({
    name: 'value', pure: false,
    standalone: false
})
export class ValuePipe implements PipeTransform {
  constructor(private readonly differs: KeyValueDiffers) {}

  private differ!: KeyValueDiffer<any, any>
  private values: Array<any> = []

  transform<K, V>(input: null): null
  transform<V>(input: { [key: string]: V } | Map<string, V>): Array<V>
  transform<V>(
    input: { [key: string]: V } | Map<string, V> | null,
  ): Array<V> | null
  transform<K, V>(input: Map<K, V>): Array<V>
  transform<K, V>(input: Map<K, V> | null): Array<V> | null
  transform<K, V>(
    input: null | { [key: string]: V; [key: number]: V } | Map<K, V>,
  ): Array<V> | null {
    if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
      return null
    }

    if (!this.differ) {
      // make a differ for whatever type we've been passed in
      this.differ = this.differs.find(input).create()
    }

    const differChanges: KeyValueChanges<K, V> | null = this.differ.diff(
      input as any,
    )

    if (differChanges) {
      this.values = []
      differChanges.forEachItem((r: KeyValueChangeRecord<K, V>) => {
        this.values.push(r.currentValue)
      })
    }
    return this.values
  }
}

/**
 * Stand-alone version of existing value pipe.
 *
 * Impure flag needed due to keep track of changes in complex values (such as objects or arrays).
 */
@Pipe({
  name: 'valueImpure',
  pure: false,
  standalone: true,
})
export class ValueImpurePipe implements PipeTransform {
  private readonly differs = inject(KeyValueDiffers)

  private differ!: KeyValueDiffer<any, any>
  private values: Array<any> = []

  transform<K, V>(input: null): null
  transform<V>(input: { [key: string]: V } | Map<string, V>): Array<V>
  transform<V>(
    input: { [key: string]: V } | Map<string, V> | null,
  ): Array<V> | null
  transform<K, V>(input: Map<K, V>): Array<V>
  transform<K, V>(input: Map<K, V> | null): Array<V> | null
  transform<K, V>(
    input: null | { [key: string]: V; [key: number]: V } | Map<K, V>,
  ): Array<V> | null {
    if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
      return null
    }

    if (!this.differ) {
      // make a differ for whatever type we've been passed in
      this.differ = this.differs.find(input).create()
    }

    const differChanges: KeyValueChanges<K, V> | null = this.differ.diff(
      input as any,
    )

    if (differChanges) {
      this.values = []
      differChanges.forEachItem(
        ({ currentValue }: KeyValueChangeRecord<K, V>) => {
          this.values.push(currentValue)
        },
      )
    }
    return this.values
  }
}
