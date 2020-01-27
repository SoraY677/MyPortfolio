<template>
  <table>
    <tr>
      <th>年月</th>
      <th>内容</th>
    </tr>
    <tr v-for="line in list" :key="line.id">
      <td class="time">{{ line[0] }}</td>
      <td class="content">{{ line[1] }}</td>
    </tr>
  </table>
</template>

<style scoped>
table {
  width: 95%;
  margin: 20px auto;
  border-collapse: collapse;
  padding: 1.2em 0 1.1em 0;
}
th{
    border-bottom: 2px solid #778899;
}
td {
  padding: 1.2em;
  border-bottom: 1px solid #778899;
}
td.time{
  width: 6em;
}
</style>

<script>
export default {
  props: ["list"]
};
</script>
