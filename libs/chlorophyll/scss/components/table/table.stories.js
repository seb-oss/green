import { Canvas, Meta } from '@storybook/addon-docs/blocks'

export default {
  title: 'Components/Table',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-table'],
  },
}

/**
 * A simple table, just add class `table` to table element to get correct styling.
 */
export const Table = {
  render: () => `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Superhero</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Peter</td>
      <td>Parker</td>
      <td>Spider-Man</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Wayne</td>
      <td>Batman</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Bruce</td>
      <td>Banner</td>
      <td>Hulk</td>
    </tr>
  </tbody>
</table>`,
}

export const WithSorting = {
  render: () => `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Superhero</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Peter</td>
      <td>Parker</td>
      <td>Spider-Man</td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>Wayne</td>
      <td>Batman</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Bruce</td>
      <td>Banner</td>
      <td>Hulk</td>
    </tr>
  </tbody>
</table>`,
}

/**
 * The following examples illustrate two ways to handle table presentation on small screens using pure CSS.
 *
 * ```css
 * @media (max-width: 576px) {
 *   .table-mobile tbody button.size-sm {
 *      font-size: 1rem;
 *      padding: .75rem 1rem;
 *   }
 * }
 * ```
 */
export const Responsive = {
  render: () => `
  <table class="table text-nowrap">
    <caption>Sortable table example with un-styled caption</caption>
    <thead>
      <tr>
        <th scope="col">
          <label class="form-control p-0">
            <input type="checkbox" />

            <span class="sr-only">Select all</span>

            <i class="m-0" />
          </label>
        </th>

        <th scope="col" aria-sort="ascending">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Reference
            <span class="sr-only">descending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Responsible
            <span class="sr-only">ascending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Country
            <span class="sr-only">ascending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Creation date
            <span class="sr-only">ascending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Account holder
            <span class="sr-only">ascending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Account number
            <span class="sr-only">ascending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort justify-content-end">
            <span class="sr-only">Sort by</span>
            Balance
            <span class="sr-only">ascending</span>
          </button>
        </th>

        <th scope="col" class="sg-sortable">
          <button class="sg-table-sort">
            <span class="sr-only">Sort by</span>
            Status
            <span class="sr-only">ascending</span>
          </button>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <label class="form-control p-0">
            <input type="checkbox" />

            <span class="sr-only">Select ...</span>

            <i class="m-0" />
          </label>
        </td>

        <td>pain002\_20050231567\_0021517263.xml</td>
        <td>55100</td>
        <td>SE</td>
        <td>2021-04-29</td>
        <td>SuperGroup Inc.</td>
        <td>000011112222</td>
        <td class="text-end">589,23</td>

        <td class="py-0 align-middle">
          <span class="badge size-sm warning">
            <strong>New</strong>
          </span>
        </td>
      </tr>

      <tr>
        <td>
          <label class="form-control p-0">
            <input type="checkbox" />

            <span class="sr-only">Select ...</span>

            <i class="m-0" />
          </label>
        </td>

        <td>pain002\_20050231567\_0021517263.xml</td>
        <td>52310</td>
        <td>FI</td>
        <td>2021-04-28</td>
        <td>Hans Ltd</td>
        <td>0055651201246</td>
        <td class="text-end">5 312,02</td>

        <td class="py-0 align-middle">
          <span class="badge size-sm warning">
            <strong>New</strong>
          </span>
        </td>
      </tr>

      <tr>
        <td>
          <label class="form-control p-0">
            <input type="checkbox" />

            <span class="sr-only">Select ...</span>

            <i class="m-0" />
          </label>
        </td>

        <td>pain002\_20050231567\_0021517263.xml</td>
        <td>50010</td>
        <td>GB</td>
        <td>2021-04-27</td>
        <td>Davis-Olson Inc</td>
        <td>0055651210000</td>
        <td class="text-end">132 031,56</td>

        <td class="py-0 align-middle">
          <span class="badge size-sm info">
            <strong>Open</strong>
          </span>
        </td>
      </tr>
    </tbody>
  </table>`,
}

/**
 * Add `table-mobile` class to table and `data-label` attributes with column header to each table cell to display the table as a list on small screens. The table header scrolls horizontally and becomes sticky on small screens too (not visible in here in storybook due to the nature of how storybook renders these examples).
 */
export const TableToList = {
  render: () => `
  <table class="table-mobile table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Favorite Food</th>

      <th />
    </tr>
  </thead>

  <tbody>
    <tr>
      <td data-label="First Name">Peter</td>
      <td data-label="Last Name">Parker</td>
      <td data-label="Gender">👨</td>
      <td data-label="Favorite Food">Pasta</td>

      <td class="py-sm-0 align-middle">
        <button type="button" class="size-sm">
          Action
        </button>
      </td>
    </tr>

    <tr>
      <td data-label="First Name">Mary Jane</td>
      <td data-label="Last Name">Watson</td>
      <td data-label="Gender">👩</td>
      <td data-label="Favorite Food">Pizza</td>

      <td class="py-sm-0 align-middle">
        <button type="button" class="size-sm">
          Action
        </button>
      </td>
    </tr>
  </tbody>
</table>`,
}

/**
 * Wrap the table in a div with the class `overflow-auto` to add scroll when table is wider than its container.
 */
export const OverFlow = {
  render: () => `
  <div class="overflow-auto">
  <table class="table text-nowrap">
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Favorite Food</th>
        <th scope="col">Hair color</th>
        <th scope="col">Birthday</th>
        <th scope="col">Zodiac sign</th>

        <th />
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Peter</td>
        <td>Parker</td>
        <td>👨</td>
        <td>Pasta</td>
        <td>Brown</td>
        <td>1974-10-23</td>
        <td>Scorpio</td>

        <td class="py-sm-0 align-middle">
          <button type="button" class="size-sm">
            Action
          </button>
        </td>
      </tr>

      <tr>
        <td>Mary Jane</td>
        <td>Watson</td>
        <td>👩</td>
        <td>Pizza</td>
        <td>Red</td>
        <td>1980-03-21</td>
        <td>Aries</td>

        <td class="py-sm-0 align-middle">
          <button type="button" class="size-sm">
            Action
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
}
