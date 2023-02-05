import React, { forwardRef } from "react";
import { Center, FileInput as MantineFileInput, Group } from "@mantine/core";

const FileInput = forwardRef(
  ({ placeholder, label, error = null, propType = "default", ...rest }) => {
    const Value = ({ file }) => {
      return (
        <Center
          inline
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[1],
            fontSize: theme.fontSizes.xs,
            padding: "3px 7px",
            borderRadius: theme.radius.sm,
          })}
        >
          <span
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxWidth: 200,
              display: "inline-block",
            }}
          >
            {file.name}
          </span>
        </Center>
      );
    };

    const ValueComponent = ({ value }) => {
      if (Array.isArray(value)) {
        return (
          <Group spacing="sm" py="xs">
            {value.map((file, index) => (
              <Value file={file} key={index} />
            ))}
          </Group>
        );
      }

      return <Value file={value} />;
    };
    return (
      <MantineFileInput
        {...rest}
        sx={(theme) => ({
          ".mantine-InputWrapper-label": {
            color: theme.colors.greyText,
            fontSize: ".900rem",
            fontWeight: "600",
            marginBottom: "5px",
          },
          ".mantine-FileInput-input": {
            div: {
              padding: `0px 15px`,
              borderRadius: `50px`,
              height: `30px`,
              color: `${theme.colors.primary}`,
            },
            "&.mantine-FileInput-invalid": {
              border: `2px solid #fa5252`,
              ".mantine-FileInput-placeholder": {
                color: "#fa5252",
              },
            },
            height: "3rem",
            border: "none",
            backgroundColor: `${theme.colors.darkGrey}`,
            fontWeight: "400",
            color: theme.colors.black,

            "&:focus,&:focus-within": {
              border: `1px solid ${theme.colors.blue}`,
            },
          },
        })}
        clearable
        placeholder={placeholder}
        label={label}
        error={error}
        multiple={propType === "multiple" ? true : false}
        valueComponent={ValueComponent}
      />
    );
  }
);

export default FileInput;
