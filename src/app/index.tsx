import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Text, View } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.get);

  return (
    <View className="flex-1 pt-40">
      {tasks?.map((task) => (
        <Text key={task.id} className=" text-2xl text-white">{task.text}</Text>
      ))}
    </View>
  );
}
