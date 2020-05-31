package cn.ua.goroddrev.domain.deserialize;

import cn.ua.goroddrev.domain.Master;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class MasterDeserializer extends StdDeserializer<Master> {

    public MasterDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public Master deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {

        JsonNode masterNode = jsonParser.getCodec().readTree(jsonParser);
        Master master = new Master();
        master.setId(masterNode.get("id").asLong());
        master.setName(masterNode.get("name").textValue());
        master.setSurname(masterNode.get("surname").textValue());
        master.setSurname(masterNode.get("phoneNumber").textValue());
        return master;
    }
}
