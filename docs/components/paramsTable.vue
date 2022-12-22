<template>
  <table>
    <thead>
      <tr>
        <th style="width: 10%">參數</th>
        <th style="width: 5%">格式</th>
        <th style="width: 1%">必填</th>
        <th style="width: 4%">預設值</th>
        <th style="width: 80%">描述</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.params }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.required }}</td>
        <td>{{ item.default }}</td>
        <td>{{ item.content }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<
        {
          params: string;
          type: string;
          default: string;
          required: "Y" | "N";
          content: string;
        }[]
      >,
      default: () => {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
th {
  white-space: nowrap;
}

th,
td {
  text-align: center;
}
</style>